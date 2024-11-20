# Git Workflow Guide

This guide will help you get started with Git, a powerful distributed version control system, and GitHub for version control and collaboration.


## 1. Install Git
Start by installing Git on your computer. You can download Git from the [official website](https://git-scm.com/) and follow the installation instructions.

---

## 2. Set Up Git Configuration
After installing Git, configure your username and email by running the following commands in your terminal or command prompt:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

Replace "Your Name" with your actual name and "your@email.com" with your email address. These details will be associated with your commits.

---

## 3. Create a New Repository

- Log in to [GitHub](https://github.com/). If you don’t have an account, [create one](https://github.com/join).

- Click the New button to create a new repository.

- Provide:
     - A name for the repository.
     - Visibility options (public or private).
     - An optional description.

---

## 4. Clone the Repository

To work locally, clone the newly created repository to your computer using:

```bash
git clone https://github.com/your-username/repository-name.git
```

Replace your-username with your GitHub username and repository-name with the repository's name.

---

## 5. Add Files and Make Commits

Add files or make changes in the cloned repository directory.

- Stage all changes using:

```bash
git add .
```

- To stage a specific file:

```bash
git add file-name
```

- Commit the staged changes with a descriptive message:


```bash
git commit -m "Your commit message"
```

---

## 6. Push to GitHub

Push your committed changes to GitHub using:

```bash
git push origin "branch name"
```

Replace "branch name" with your desired branch name.

---

## 7. Pull Changes from GitHub

If you're collaborating with others or switching devices, pull the latest changes using:

```bash
git pull origin "branch-name"
```

Replace "branch-name" with your desired branch name.

This fetches and merges changes from the remote repository into your local branch.

---

## 7. Branching and Merging

### Create a New Branch

Work on features or fixes in a separate branch: 

```bash
git branch "new-branch"
git checkout "new-branch"
```

Replace "new-branch" with your desired branch name.

### Merge Branches

After making changes, merge the branch back into the main branch:

```bash
git checkout main
git merge "new-branch"
```
