import React, { useState, useEffect } from 'react';

export function Repos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const headers = {
      Authorization: `Bearer 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`,
    };

    fetch('https://api.github.com/users/Vakaliuk/repos', {
      method: 'GET',
      headers: headers,
    })
      .then((Response) => Response.json())
      .then((data) => {
        const repos = data.map((repo) => ({
          link: repo.html_url,
          name: repo.full_name,
          description: repo.description,
        }));
        setRepos(repos);
      });
  }, []);

  function renderRepos(repos) {
    return repos.map((element) => {
      return (
        <li key={element.name} className="repo-item">
          <a href={element.link}>{element.name}</a>
          <p>{element.description}</p>
        </li>
      );
    });
  }

  return (
    <div className="repositories">
      <h2 className="section-title">Repositories</h2>
      <hr />

      <ul className="repos-list">{renderRepos(repos)}</ul>
    </div>
  );
}

// data.forEach((item) => {
//   const reposRef = document.querySelector('.repos');

//   const repo = document.createElement('li');
//   repo.innerHTML = `<a href="${item.html_url}"> ${item.full_name} </a>`;
//   repo.classList.add('repo-item');

//   const repoDesc = document.createElement('p');
//   repoDesc.textContent = `- ${item.description}`;
//   repoDesc.classList.add('repo-description');

//   reposRef.appendChild(repo);
//   if (repoDesc.textContent !== '- null') {
//     repo.appendChild(repoDesc);
//   }
// });
