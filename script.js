// @ts-check

/**
 * Replace all repository topics
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param {{ topics?: string[] }} options
 */
export async function script(octokit, repository, options = {}) {
	const owner = repository.owner.login;
	const repo = repository.name;
	let topics = options.topics || []

	if (!Array.isArray(topics)) {
		topics = [topics]
	}

	if (repository.archived) {
		octokit.log.warn(`${repository.html_url} is archived`);
		return;
	}

	try {
		await octokit.request(
			"PUT /repos/{owner}/{repo}/topics",
			{
				owner,
				repo,
				names: topics,
				mediaType: {
					previews: ["mercy"]
				}
			}
		);

		octokit.log.info(`Topics ${topics.length? 'added in' : 'removed from'} repository: ${repository.html_url}`);
	} catch (e) {
		let reason;
		switch (e.status) {
			case 404:
				reason = 'Resource not found'
				break;
			case 415:
				reason = 'Unsupported Media Type'
				break;
			case 422:
				reason = '422 Unprocessable Entity'
				break;
			default:
				reason = e
				break;
		}
		octokit.log.warn(`${reason}: ${repository.html_url}`);
	}

}
