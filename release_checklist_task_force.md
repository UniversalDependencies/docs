---
layout: base
title:  'UD release checklist'
udver:  '2'
---

# UD release checklist for the task force

This checklist describes the steps needed in order to release a new version of the UD data.
It is meant for the maintenance task force rather than individual treebank teams.
See [here](release_checklist.html) for the checklist for data contributors.

## Determining which treebanks will be released

* Make sure that you have local clones of all UD_* repositories that should be released.
  This step cannot be automated (unless you write a script that queries Github about all
  repositories belonging to the UniversalDependencies organization).
* Make sure you have the most current content of all the repositories (note that this
  command assumes you have not modified your local copy of the data without pushing it
  back; if this is the case, you will see lists of modified files in the output and you
  will have to resolve it). Also make sure that you are working with the `dev` branch:<br />
  <code>for i in UD_* ; do echo $i ; cd $i ; git checkout dev ; git pull --no-edit ; cd .. ; echo ; done</code>
* Run `tools/check_files.pl |& tee release-2.6-report.txt | less`.
  (Check the code for parameters that are currently hard-coded, such as the release number.)
  The script will visit all repositories and report any missing files, unexpected or unexpectedly named files.
  It will download the [online validation report](http://quest.ms.mff.cuni.cz/udvalidator/)
  and check whether the treebanks are valid (prerequisite: all UD repositories are registered
  on the validation server `quest.ms.mff.cuni.cz`).
  It will also collect information such as the list of contributors (we need this metadata for Lindat).
* Freeze the list of treebanks that will be released (i.e., contain valid data).
  Take the list from the output of `tools/check_files.pl` and save it as
  `released_treebanks.txt` (just one line, names of UD folders separated by whitespace).
* Check the [validation report](http://quest.ms.mff.cuni.cz/udvalidator/)
  for legacy exceptions that are no longer needed. Edit the script `update-validation-report.pl`
  in the `docs-automation` repository and remove those exceptions. Also update the back-up release
  numbers for treebanks that are part of the current release. (If the treebank is not valid but it
  has been previously released, its last valid release serves as back up and will be re-released
  instead of the invalid new version.)

## Processing the data before releasing them

* Make sure that there are not significant overlaps between training and dev/test files of treebanks of one language.<br />
  <code>check_overlaps.pl $(cat released_treebanks.txt) |& tee overlap.log</code>
* Update statistics in the `stats.xml` file in each repository:<br />
  <code>for i in $(cat released_treebanks.txt) ; do echo $i ; cd $i ; ( ../tools/conllu-stats.pl *.conllu > stats.xml ) ; git add stats.xml ; git commit -m 'Updated statistics.' ; git push ; cd .. ; echo ; done</code>
* Merge the `dev` branch into `master` in the released repositories.
  The `master` branch should not be touched the next six months and it should have exactly the contents that was officially
  released.
  (Exceptions: the script `package_ud_release.sh`, that we will later use to create the release,
  generates plain text files from the CoNLL-U files. The plain text files appear only in the
  released package but not in the Github treebank repository.
  On the other hand, below we generate treebank evaluation log that appears only in the `master`
  branch but not in the `dev` branch nor in the released package.)
  <br />
  <code>for i in $(cat released_treebanks.txt) ; do echo $i ; cd $i ; git checkout master ; git pull --no-edit ; git merge dev --no-edit ; git push ; git checkout dev ; cd .. ; echo ; done</code>
  * Check for conflicts from the previous step. If people misbehaved and pushed commits to `master`, even after a revert automatic merging may no longer be possible. We must resolve all conflicts manually before going on! The conflicted repositories are still switched to the `master` branch and git will not allow any further operations with them!<br />
    <code>for i in $(cat released_treebanks.txt) ; do echo $i ; cd $i ; if ( git status | grep conflict ) ; then echo XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX CONFLICT XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ; sleep 2 ; else echo OK ; fi ; cd .. ; echo ; done</code>
    * <code>cd UD_...(the-one-with-conflict) ; git status</code> will show what files have a problem. Let's assume that only `README.md` has a problem. This is how we replace it with the version from the `dev` branch and conclude the merge:<br />
      <code>git checkout --theirs README.md ; git add README.md ; git commit -m 'Merge branch dev' ; git push ; git checkout dev ; cd ..</code>
  * After resolving the conflicts do not forget to checkout the `dev` branch again! (If there were no conflicts, we are already back in `dev`.)<br />
    <code>for i in $(cat released_treebanks.txt) ; do echo $i ; cd $i ; git checkout dev ; cd .. ; echo ; done</code>
* Re-evaluate the treebanks for the star ranking on the website. This is done only in the master branch and the result is stored there.<br />
  <code>for i in $(cat released_treebanks.txt) ; do echo $i ; cd $i ; git checkout master ; cd .. ; perl -I tools tools/evaluate_treebank.pl $i --verbose &gt;&amp; $i/eval.log ; cd $i ; git add eval.log ; git commit -m 'Updated treebank evaluation.' ; git push ; git checkout dev ; cd .. ; done</code>
* Tag the current commit in all repositories with the tag of the current release (`git tag r2.6` for UD 2.6).
  Push the tag to Github: `git push origin --tags`.
  You may even tag a particular commit retroactively: `git tag -a r2.1 9fceb02`.
  If the repository is updated after you assigned the tag and you need to re-assign the tag to a newer commit,
  this is how you remove the tag from where it is now: `git tag -d r2.1`.
  And this is how you remove it from Github: `git push origin :refs/tags/r2.1`.<br />
  <code>for i in $(cat released_treebanks.txt) docs tools ; do echo $i ; cd $i ; git tag r2.6 ; git push --tags ; cd .. ; echo ; done</code>
  **Note: We will later update certain files in the `docs` repository (statistics etc.)
  It may be thus better to wait with tagging the repositories until `docs` is in its final state.**

## Updating automatically generated parts of documentation

* Run the script that refreshes the title page of Universal Dependencies (list of languages, treebanks and their properties).<br />
  <code>cd docs-automation ; make all ; cd ../docs ; git pull --no-edit ; git commit -a -m 'Updated title page.' ; git push</code>
* Run the `conllu-stats.pl` script again (but with different settings) and generate the long statistics that are displayed in the docs; note that the script takes the release number as a parameter and puts it in the generated index page:<br />
  <code>cd docs ; git pull --no-edit ; cd .. ; for i in $(cat released_treebanks.txt) ; do echo $i ; tools/conllu-stats.pl --oformat newdetailed --release 2.6 --treebank $i --docs docs ; echo ; done ; cd docs ; git add treebanks/*/*.md ; git commit -m 'Updated statistics.' ; git push ; cd ..</code>
* Generate side-by-side comparison whenever there are multiple treebanks of one language:<br />
  <code>perl tools/generate_comparison_of_treebanks.pl ; cd docs ; git add treebanks/*-comparison.md ; git commit -m 'Updated comparison of treebanks.' ; git push ; cd ..</code>
* Run two other scripts that generate the lists of language-specific features and dependency
  relation subtypes for the docs repository. Note that the first script does not directly
  rewrite the page in the docs repository, we must redirect its STDOUT there. The second script,
  <code>survey_deprel_subtypes.pl</code>, accesses directly <code>docs/ext-dep-index.md</code>.
  Once the two files are updated, we must commit and push them to Github of course.<br />
  <code>perl tools/survey_features.pl --tbklist released_treebanks.txt > docs/ext-feat-index.md<br />
  perl tools/survey_deprel_subtypes.pl --tbklist released_treebanks.txt<br />
  cd docs ; git pull --no-edit ; git status ; git commit -a -m 'Updated list of features and relations.' ; git push ; cd ..</code>
* Run the script `makedata.sh` in the docs repository. It will regenerate the YAML files in the folder `_data`; this is needed
  for cross-lingual links between documentation pages devoted to individual UPOS tags, features and relations.<br />
  <code>cd docs ; ./makedata.sh ; git commit -a -m 'Updated crosslingual links.' ; git push ; cd ..</code><br />
  Note that the script updates the data files that are used in many MarkDown pages but it does not update the MarkDown pages directly.
  Jekyll thus will not notice that almost all documentation must be re-generated; it will update nothing, until a change happens
  directly in a MarkDown file, and then it will re-generate only the HTML page based on this MarkDown file.
  We probably need to ask Filip or Sampo to re-run Jekyll manually? A possible hack would be to insert a blank line at the end of every
  affected MarkDown file but it is an ugly approach.

## Releasing the data

* Run the script <tt>tools/package_ud_release.sh</tt>, which must find the release number in the environment,
  and its arguments are names of folders to be released.<br />
  <code>RELEASE=2.6 tools/package_ud_release.sh $(cat released_treebanks.txt)</code>
  * If we later find out that we need to fix a bug in one (or a few) repository, we can update the release folder without building everything from scratch:<br />
    <code>RELEASE=2.6 tools/package_ud_release.sh --update UD_X UD_Y</code>
* Make the release packages temporarily available for download somewhere and ask the treebank providers to check them before we archive them in Lindat.
* Tell Anša Vernerová that she can start importing the data to Kontext (ideally the announcement about the release would include links to PML-TQ, Kontext and SETS). Tell Milan Straka that he can start training UDPipe models of the new data.
* Update the list of licenses for Lindat. See the [LICENSE repository](https://github.com/UniversalDependencies/LICENSE).
  Send the new list to Lindat so they add it to their menu (they like to get it as a diff file against the previous license;
  they can be reached at lindat-help@ufal.mff.cuni.cz).
  **Update November 2019: They actually create XML and HTML documents from it. To reduce manual work on both sides,
  we could generate these documents directly. See e-mail from Ondřej Košarko on 13.11.2019.
  See also my notes in the README file of the LICENSE repository.**<br />
  <code>( for i in $(cat released_treebanks.txt) ; do echo $i ; cd $i ; grep -i license: README* ; cd .. ; echo ; done ) |&amp; less</code>
* Once the Lindat staff make the new license list available in their system, we can create
  a new Lindat item for the new version of UD. The preferable way: Create the new item as
  a new version of the item representing the previous release of Universal Dependencies.
  When signed in, go to the
  [list of your previous contributions](https://lindat.mff.cuni.cz/repository/xmlui/submissions),
  check the box next to the line with the most recent release of UD, then go down and press the
  button that says “Add new version”. If this is not possible because you are not the user who
  created the item for the previous version, you can
  [create a new Lindat item from scratch](https://lindat.mff.cuni.cz/repository/xmlui/submit).
  Then the server starts by asking you to “select a community”. Choose LINDAT / CLARIN.
  In the note for the editors (last page of the form), ask them to mark the previous UD release
  as obsolete and to add a link pointing from the previous release to the new one.
  Note that the Lindat staff may help to automate other tasks as well.
  For example, we have an extraordinarily long list of authors. Instead of typing them on the Lindat website one-by-one,
  they can batch-upload the list we send them. Once everything is ready and we submit the item, they will review it
  and archive it. At that moment the release is officially out and no changes to the data files are permitted
  (changes to metadata are possible if necessary, but this is done on demand only).
  The item will get a persistent URL (handle.net); that is the URL that we want to publish on the UD website.
  Note that you can now see the persistent URL in the record even before it has been approved. It will not
  change on approval and you can save it; however, it will not be operational as a URL until the item is archived.
* Update the title page of Universal Dependencies. Send out announcement to ud@stp.lingfil.uu.se, corpora@uib.no, ACL list etc.
* Upload the data to the search engines (PML-TQ, Kontext, SETS etc.)
* Check the issues of the docs repository on Github, close the ones that have been solved, and create a new milestone for the others.
* Generate Deep UD based on the new UD release.

<small><code style='color:lightgrey'>
\# copy metadata to biblio<br />
rel="2.6"<br />
path=$(pwd)<br />
cd /net/data<br />
tar xzf $path/release-$rel/ud-treebanks-v$rel.tgz<br />
mv ud-treebanks-v$rel universal-dependencies-$rel<br />
\# check that Treex knows all new language codes (two files: resources XML schema and Core/Types.pm)<br />
cd $HAMLEDT<br />
perl ./populate_ud.pl $rel<br />
cd normalize ; make qpmltq<br />
\# follow instructions in ud-to-pmltq manual ($HAMLEDT/pmltq/navod_na_export_ud_do_pmltq.odt)<br />
</code></small>
