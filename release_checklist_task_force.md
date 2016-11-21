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
* Make sure you have the most current content of all the repositories (note that this command assumes you have not modified your local copy of the data without pushing it back; if this is the case, you will see lists of modified files in the output and you will have to resolve it). Also make sure that you are working with the `dev` branch:<br />
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
  <code>for l in ar bg ca cop cs cu da de el en es et eu fa fi fr ga gl got grc he hi hr hu id it ja kk la lv nl no pl pt ro ru sa sk sl sv swl ta tr ug uk vi zh ; do perl tools/conllu-stats.pl --detailed --data . --docs docs --lang $l ; done</code>
* Merge the `dev` branch into `master` in every UD_* repository.
  The `master` branch should not be touched the next six months and it should have exactly the contents that was officially
  released. In fact, the individual data providers should never commit anything to the `master` branch, only to `dev` branch.
  (But we currently do not have means to enforce it. If someone commits to `master`, we will have to remove the commits from the history manually, using `git revert`.)<br />
  <code>for i in UD_* ; do pushd $i ; git checkout master ; git pull --no-edit ; git merge dev ; git push ; git checkout dev ; popd ; echo ; done</code>
* Check for conflicts from the previous step. If people misbehaved and pushed commits to `master`, even after a revert automatic merging may no longer be possible. We must resolve all conflicts manually before going on! The conflicted repositories are still switched to the `master` branch and git will not allow any further operations with them!<br />
  <code>for i in UD_* ; do pushd $i ; if ( git status | grep conflict ) ; then echo XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX CONFLICT XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ; else echo OK ; fi ; popd ; echo ; done</code>
* After resolving the conflicts do not forget to checkout the `dev` branch again! (If there were no conflicts, we are already back in `dev`.)<br />
  <code>for i in UD_* ; do pushd $i ; git checkout dev ; popd ; echo ; done</code>
* The following steps are now performed by the script <tt>tools/package_ud_release.sh</tt>.
  You must first open the script and manually modify the RELEASE number on one of the initial lines! (This should become a
  command-line argument in the future.)
  * Create the release folder, copy there the repositories that contain .conllu data (skip empty repositories!) and erase files
    that should not be released (`.gitignore`, `.git`, `not-to-release`). WARNING: The packaging script currently does not
    detect repositories that contain data but their README says they should not be released yet!
  * Prepare the current content of the tools repository as a separate package, also without `.git` and `.gitignore`.
  * Prepare the current content of the docs repository as a separate package, also without `.git` and `.gitignore`.
    Note that this is archiving the MarkDown _source code_ of the documentation. See below for archiving the corresponding HTML.
  * The surface form of documentation (i.e. the web content visible to the reader) is automatically generated in a separate Github repository. WARNING! Many folders contain generated files `AUX.html` and `aux.html` (besides `AUX_.html` and `aux_.html`). These should _not_ be included in the package because that might prevent people from unpacking it in MS Windows (although some unpacking programs, like 7zip, will be able to overcome this by simply renaming the file to `_aux.html` before unpacking it). Note furthermore that we currently cannot force Jekyll (the page generator) to make all hyperlinks relative in order for the pages to work well offline. Many hyperlinks will be broken when viewing the pages, and the user will have to open individual pages from the file manager instead. However, it may still be useful to provide the HTML rendering, especially because of the embedded tree visualizations.
* Make the release packages temporarily available for download somewhere and ask the treebank providers to check them before we archive them in Lindat.
* Tag the current commit in all repositories with the tag of the current release (`git tag r1.3` for UD 1.3).
  Push the tag to Github: `git push origin --tags`.
  You may even tag a particular commit retroactively: `git tag -a r1.3 9fceb02`.
  If the repository is updated after you assigned the tag and you need to re-assign the tag to a newer commit,
  this is how you remove the tag from where it is now: `git tag -d r1.3`.
  And this is how you remove it from Github: `git push origin :refs/tags/r1.3`.<br />
  <code>for i in UD_* docs tools ; do pushd $i ; git tag r1.3 ; git push --tags ; popd ; echo ; done</code>
* Once the Lindat staff make the new license list available in their system, we can
  [create a new Lindat item](https://lindat.mff.cuni.cz/repository/xmlui/submit) for the new version of UD.
  (The server starts by asking you to “select a community”. Choose LINDAT / CLARIN.
  In the note for the editors (last page of the form), ask them to mark the previous UD release as obsolete and to add a link
  pointing from the previous release to the new one.)
  Note that the Lindat staff may help to automate other tasks as well.
  For example, we have an extraordinarily long list of authors. Instead of typing them on the Lindat website one-by-one,
  they can batch-upload the list we send them. Once everything is ready and we submit the item, they will review it and assign
  the persistent URL (handle.net) to the item; that is the URL that we want to publish on the UD website. At that moment the
  release is officially out and no changes to the data files are permitted (changes to metadata are possible if necessary,
  but this is done on demand only).
* Update the title page of Universal Dependencies. Send out announcement to corpora@uib.no, ACL list etc.
* Upload the data to the search engines (SETS, PML-TQ, Kontext etc.)

<small><code style='color:lightgrey'>
path=$(pwd) ;
cd /net/data ;
tar xzf $path/release-1.4/ud-treebanks-v1.4.tgz ;
mv ud-treebanks-v1.4 universal-dependencies-1.4 ;
cd $HAMLEDT ;
perl ./populate_ud13.pl
</code></small>
