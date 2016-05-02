---
layout: base
title:  'UD release checklist'
---

# UD release checklist for the task force

This checklist describes the steps needed in order to release a new version of the UD data.
It is meant for the maintenance task force rather than individual treebank teams.
See [here](release_checklist.html) for the checklist for data contributors.

* Make sure that you have local clones of all UD_* repositories that should be released.
  This step cannot be automated (unless you write a script that queries Github about all repositories belonging to the UniversalDependencies organization).
* Make sure you have the most current content of all the repositories: `for i in UD_* ; do pushd $i ; git pull --no-edit ; popd ; done`.
* NEW in UD 1.3: some languages have the new data in `dev` branch. After this release, all languages will have to use the `dev` branch.
  So we should create the branch in repositories that do not have it.
  `for i in UD_* ; do pushd $i ; git pull --no-edit ; git checkout -b dev ; git checkout dev ; git push --set-upstream origin dev ; popd ; done`
  For all repositories we should make sure that the `dev` branch is checked out.
* Make sure that all CoNLL-U files are formally valid (results of the validator are available on-line but make sure that no repository is missing there).
* Run `check_files.pl` from the tools repository (if there are new languages, you may need to add their codes in the source code first).
  It will visit all UD_* repositories and report any missing files, unexpected or unexpectedly named files.
  It will also collect information such as the list of contributors (we need this metadata for Lindat).
* Update the list of licenses for Lindat. See the LICENSES repository.
  Send the new list to Lindat so they add it to their menu (they like to get it as a diff file against the previous license).
* Run `cat *.conllu | ../tools/conllu-stats.pl > stats.xml` in every UD_* repository to update the `stats.xml` statistics.
  Do not forget to `git commit` and `push`.
* Run the same script again (but with different settings) and generate the long statistics that are displayed in the docs:
  This time the script is run for every language (not every treebank):
  `perl tools/conllu-stats.pl --detailed --data . --docs docs --lang pt`
* Tag the current commit in all repositories with the tag of the current release (`git tag r1.3` for UD 1.3).
  Push the tag to Github: `git push origin --tags`.
  You may even tag a particular commit retroactively: `git tag -a r1.3 9fceb02`.
  If the repository is updated after you assigned the tag and you need to re-assign the tag to a newer commit,
  this is how you remove the tag from where it is now: `git tag -d r1.3`.
  And this is how you remove it from Github: `git push origin :refs/tags/r1.3`.
* Merge the `dev` branch into `master` in every UD_* repository.
  The `master` branch should not be touched the next six months and it should have exactly the contents that was officially released.
  In fact, the individual data providers should never commit anything to the `master` branch, only to `dev` branch.
  (But we currently do not have means to enforce it. If someone commits to `master`, we will have to remove the commits from the history manually,
  using `git revert`.)
* Before releasing, create a copy of each UD_* repository, and remove the following files and subfolders:
  * .gitignore
  * .git
  * not-to-release
* Prepare two separate packages, the current contents of the repositories docs and tools, also without .git and .gitignore.
  Moreover, the docs repository should be separately checked out in two branches, pages-source and gh-pages.
  (NOTE: This has changed since UD 1.2. The generated pages are now in a separate repository, mirrored at the site universaldependencies.org.)
  WARNING! Many subfolders of the gh-pages branch contain generated files AUX.html and aux.html (besides AUX_.html and aux_.html).
  These should _not_ be included in the package because that might prevent people from unpacking it in MS Windows
  (although some unpacking programs, like 7zip, will be able to overcome this by simply renaming the file to _aux.html before unpacking it).
* Once the Lindat staff make the new license list available in their system, we can create a new Lindat item for the new version of UD.
  Note that the Lindat staff may help to automate other tasks as well.
  For example, we have an extraordinarily long list of authors. Instead of typing them on the Lindat website one-by-one, they can batch-upload the list we send them.
  Once everything is ready and we submit the item, they will review it and assign the persistent URL (handle.net) to the item;
  that is the URL that we want to publish on the UD website.
  At that moment the release is officially out and no changes to the data files are permitted (changes to metadata are possible if necessary,
  but this is done on demand only).
* Update the title page of Universal Dependencies. Send out announcement to corpora@uib.no, ACL list etc.

What about the split training data in Czech?
We could actually merge it again for the release!
