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
* Make sure you have the most current content of all the repositories (note that this command assumes you have not modified your local copy of the data without pushing it back; if this is the case, you will see lists of modified files in the output and you will have to resolve it):<br />
  <code>for i in UD_* ; do pushd $i ; git pull --no-edit ; popd ; echo ; done</code>
* NEW in UD 1.3: some languages have the new data in `dev` branch. After this release, all languages will have to use the
  `dev` branch. So we should create the branch in repositories that do not have it.<br />
  <code>for i in UD_* ; do pushd $i ; git pull --no-edit ; git checkout -b dev ; git checkout dev ; git push --set-upstream origin dev ; popd ; echo ; done</code>
* For all repositories we should make sure that the `dev` branch is checked out:<br />
  <code>for i in UD_* ; do pushd $i ; git checkout dev ; git pull --no-edit ; popd ; echo ; done</code>
* Make sure that all CoNLL-U files are formally valid (results of the validator are [available on-line](validation.html) but make sure that no repository is missing there).<br />
  <code>for i in UD_* ; do pushd $i ; if [ -f *-test.conllu ] ; then for j in *.conllu ; do echo $j ; x=$(echo $j | perl -pe 'chomp; s/-ud.*//') ; ../tools/validate.py --lang $x $j ; done ; fi ; popd ; done</code>
* Run `tools/check_files.pl` (if there are new languages, you may need to add their codes in the source code first).
  It will visit all UD_* repositories and report any missing files, unexpected or unexpectedly named files.
  It will also collect information such as the list of contributors (we need this metadata for Lindat).
* Update the list of licenses for Lindat. See the [LICENSE repository](https://github.com/UniversalDependencies/LICENSE).
  Send the new list to Lindat so they add it to their menu (they like to get it as a diff file against the previous license;
  they can be reached at lindat-help@ufal.mff.cuni.cz).
* Update statistics in the `stats.xml` file in each repository:<br />
  <code>for i in UD_* ; do pushd $i ; ( cat *.conllu | ../tools/conllu-stats.pl > stats.xml ) ; git add stats.xml ; git commit -m 'Updated statistics.' ; git push ; popd ; echo ; done</code>
* Run the same script again (but with different settings) and generate the long statistics that are displayed in the docs:
  This time the script is run for every language (not every treebank):<br />
  <code>for l in grc ar eu bg ca zh hr cs da nl en et fi fr gl de got el he hi hu id ga it kk la lv no cu fa pl pt ro ru sl es sv ta tr ; do perl tools/conllu-stats.pl --detailed --data . --docs docs --lang $l ; done</code>
* Merge the `dev` branch into `master` in every UD_* repository.
  The `master` branch should not be touched the next six months and it should have exactly the contents that was officially
  released. In fact, the individual data providers should never commit anything to the `master` branch, only to `dev` branch.
  (But we currently do not have means to enforce it. If someone commits to `master`, we will have to remove the commits from the history manually, using `git revert`.)<br />
  <code>for i in UD_* ; do pushd $i ; git checkout master ; git pull --no-edit ; git merge dev ; git push ; git checkout dev ; popd ; echo ; done</code>
* Create the release folder, copy there the repositories that contain .conllu data (skip empty repositories!) and erase files
  that should not be released (`.gitignore`, `.git`, `not-to-release`). The training data in UD_Czech is split to four files
  because it is too large for Github. However, it can be one file in our release, so join the files again in the release copy.
  (NOTE: The split is currently described in README.txt. If the data is re-joined, the README.txt file should be updated,
  otherwise the users might get confused.)<br />
  <code>mkdir release-1.3<br />
  cd release-1.3<br />
  mkdir ud-treebanks-v1.3<br />
  mkdir ud-documentation-v1.3<br />
  mkdir ud-tools-v1.3<br />
  cd ud-treebanks-v1.3<br />
  for i in ../../UD_* ; do if [ -f $i/*-ud-train.conllu ] ; then echo $i ; cp -r $i . ; fi ; done<br />
  cp -r ../../UD_Czech .<br />
  cat UD_Czech/cs-ud-train-*.conllu > UD_Czech/cs-ud-train.conllu<br />
  rm UD_Czech/cs-ud-train-*.conllu<br />
  rm -rf UD_*/.git* UD_*/not-to-release<br />
  cd ..<br />
  tar czf ud-treebanks-v1.3.tgz ud-treebanks-v1.3<br />
  cd ..</code>
* Prepare two separate packages, the current contents of the repositories docs and tools, also without .git and .gitignore.
  Moreover, the docs repository should be separately checked out in two branches, pages-source and gh-pages.
  (NOTE: This has changed since UD 1.2. The generated pages are now in a separate repository, mirrored at the site universaldependencies.org.)
  WARNING! Many subfolders of the gh-pages branch contain generated files AUX.html and aux.html (besides AUX_.html and aux_.html).
  These should _not_ be included in the package because that might prevent people from unpacking it in MS Windows
  (although some unpacking programs, like 7zip, will be able to overcome this by simply renaming the file to _aux.html before unpacking it).
* Tag the current commit in all repositories with the tag of the current release (`git tag r1.3` for UD 1.3).
  Push the tag to Github: `git push origin --tags`.
  You may even tag a particular commit retroactively: `git tag -a r1.3 9fceb02`.
  If the repository is updated after you assigned the tag and you need to re-assign the tag to a newer commit,
  this is how you remove the tag from where it is now: `git tag -d r1.3`.
  And this is how you remove it from Github: `git push origin :refs/tags/r1.3`.<br />
  <code>for i in UD_* docs tools ; do pushd $i ; git tag r1.3 ; git push --tags ; popd ; echo ; done</code>
* Once the Lindat staff make the new license list available in their system, we can [create a new Lindat item](https://lindat.mff.cuni.cz/repository/xmlui/submit) for the new version of UD.
  Note that the Lindat staff may help to automate other tasks as well.
  For example, we have an extraordinarily long list of authors. Instead of typing them on the Lindat website one-by-one, they can batch-upload the list we send them.
  Once everything is ready and we submit the item, they will review it and assign the persistent URL (handle.net) to the item;
  that is the URL that we want to publish on the UD website.
  At that moment the release is officially out and no changes to the data files are permitted (changes to metadata are possible if necessary,
  but this is done on demand only).
* Update the title page of Universal Dependencies. Send out announcement to corpora@uib.no, ACL list etc.
