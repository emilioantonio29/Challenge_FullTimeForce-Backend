// returns true if the string passed in, has the structure of a github repository url
export function isValidGitHubRepoUrl(url: string): boolean {
    const githubRepoRegex: RegExp = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;
    return githubRepoRegex.test(url);
}

// returns owner and github repository name if the string passed in, has the structure of a github repository url
export function extractGitHubRepoInfo(url: string): { owner: string; repoName: string } | null {
    try {
        const githubRepoRegex = /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/?$/;
        const match = url.match(githubRepoRegex);
      
        if (match && match.length === 3) {
            const owner = match[1];
            const repoName = match[2];
            return { owner, repoName };
        }
        return null;
    } catch (error) {
        return null;
    }
}