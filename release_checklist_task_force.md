---
layout: base
title:  'UD release checklist'
udver:  '2'
---

# UD release checklist for the task force

This checklist describes the steps needed in order to release a new version of the UD data.
It is meant for the maintenance task force rather than individual treebank teams.
See [here](release_checklist.html) for the checklist for data contributors.

* Make sure that you have local clones of all UD_* repositories that should be released.
  This step cannot be automated (unless you write a script that queries Github about all repositories belonging to the UniversalDependencies organization).
* Make sure you have the most current content of all the repositories (note that this command assumes you have not modified your local copy of the data without pushing it back; if this is the case, you will see lists of modified files in the output and you will have to resolve it). Also make sure that you are working with the `dev` branch:<br />
  <code>for i in UD_* ; do echo $i ; cd $i ; git checkout dev ; git pull --no-edit ; cd .. ; echo ; done</code>
* Make sure that all CoNLL-U files are formally valid (results of the validator are [available on-line](validation.html) but make sure that no repository is missing there).<br />
  <code>for i in UD_* ; do cd $i ; if [ -f *-test.conllu ] ; then for j in *.conllu ; do x=$(echo $j | perl -pe 'chomp; s/-ud.*//') ; if ../tools/validate.py --lang $x $j &gt;&amp; /dev/null ; then echo $j valid ; else echo $j INVALID ==================== ; fi ; done ; fi ; cd .. ; done</code>
* Run `tools/check_files.pl |& tee release-2.1-report.txt | less`.
  It will visit all UD_* repositories and report any missing files, unexpected or unexpectedly named files.
  It will also collect information such as the list of contributors (we need this metadata for Lindat).
* <strong>Specific for releases 2.0 and 2.2 (CoNLL shared tasks):</strong> There will be no test data. However, the dev data should be released in three different forms: 1. the full annotation that we've been always releasing; 2. the form that the systems participating in the shared task will get on input, i.e. raw text without even sentence boundaries; 3. the intermediate form, which is a CoNLL-U file, but it does not contain syntactic annotation, and everything else (sentence segmentation, tokenization, morphology) is predicted by UDPipe. If there is only training data and no dev data, it will have to be processed in the 10-fold fashion.
  * The release script must know the list of treebanks that are included in the shared task. Only these treebanks will have the detokenized and predicted versions mentioned above. Only these treebanks will be also checked again that their repository does not contain the test data. The remaining treebanks are allowed to include test data.
* Update statistics in the `stats.xml` file in each repository:<br />
  <code>for i in UD_* ; do echo $i ; cd $i ; ( cat *.conllu | ../tools/conllu-stats.pl > stats.xml ) ; git add stats.xml ; git commit -m 'Updated statistics.' ; git push ; cd .. ; echo ; done</code>
* Run the same script again (but with different settings) and generate the long statistics that are displayed in the docs:<br />
  <code>cd docs ; git pull --no-edit ; cd .. ; for i in UD_* ; do echo $i ; tools/conllu-stats.pl --oformat newdetailed --treebank $i --docs docs ; echo ; done ; cd docs ; git add treebanks/*/*.md ; git commit -m 'Updated statistics.' ; git push ; cd ..</code>
* Generate side-by-side comparison whenever there are multiple treebanks of one language:<br />
  <code>perl tools/generate_comparison_of_treebanks.pl ; cd docs ; git add treebanks/*-comparison.md ; git commit -m 'Updated comparison of treebanks.' ; git push ; cd ..</code>
* Run two other scripts that generate the lists of language-specific features and dependency relation subtypes for the docs repository. Note that the first script does not directly rewrite the page in the docs repository, and its output is not a complete MarkDown source because it lacks the initial header. Therefore we must save the output in a text file, then open <code>docs/ext-feat-index.md</code> and copy the contents there. The second script, <code>survey_deprel_subtypes.pl</code>, accesses directly <code>docs/ext-dep-index.md</code>. Once the two files are updated, we must commit and push them to Github of course.<br />
  <code>perl tools/survey_features.pl > features.txt ; perl tools/survey_deprel_subtypes.pl ; cd docs ; ...</code>
* Merge the `dev` branch into `master` in every UD_* repository.
  The `master` branch should not be touched the next six months and it should have exactly the contents that was officially
  released. In fact, the individual data providers should never commit anything to the `master` branch, only to `dev` branch.
  (But we currently do not have means to enforce it. If someone commits to `master`, we will have to remove the commits from the history manually, using `git revert`.)<br />
  <code>for i in UD_* ; do echo $i ; cd $i ; git checkout master ; git pull --no-edit ; git merge dev ; git push ; git checkout dev ; cd .. ; echo ; done</code>
* Check for conflicts from the previous step. If people misbehaved and pushed commits to `master`, even after a revert automatic merging may no longer be possible. We must resolve all conflicts manually before going on! The conflicted repositories are still switched to the `master` branch and git will not allow any further operations with them!<br />
  <code>for i in UD_* ; do echo $i ; cd $i ; if ( git status | grep conflict ) ; then echo XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX CONFLICT XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ; sleep 2 ; else echo OK ; fi ; cd .. ; echo ; done</code>
  * <code>cd UD_...(the-one-with-conflict) ; git status</code> will show what files have a problem. Let's assume that only `README.txt` has a problem. This is how we replace it with the version from the `dev` branch and conclude the merge:<br />
    <code>git checkout --theirs README.txt ; git add README.txt ; git commit -m 'Merge branch dev' ; git push ; git checkout dev ; cd ..</code>
* After resolving the conflicts do not forget to checkout the `dev` branch again! (If there were no conflicts, we are already back in `dev`.)<br />
  <code>for i in UD_* ; do echo $i ; cd $i ; git checkout dev ; cd .. ; echo ; done</code>
* The following steps are now performed by the script <tt>tools/package_ud_release.sh</tt>, which must find the release number in the environment, and its arguments are names of folders to be released (copy the list from the output of <tt>check_files.pl</tt>).<br />
<code>RELEASE=2.1 tools/package_ud_release.sh UD_Afrikaans UD_Ancient_Greek UD_Ancient_Greek-PROIEL UD_Arabic UD_Arabic-NYUAD UD_Arabic-PUD UD_Basque UD_Belarusian UD_Bulgarian UD_Buryat UD_Cantonese UD_Catalan UD_Chinese UD_Chinese-CFL UD_Chinese-HK UD_Chinese-PUD UD_Coptic UD_Croatian UD_Czech UD_Czech-CAC UD_Czech-CLTT UD_Czech-FicTree UD_Czech-PUD UD_Danish UD_Dutch UD_Dutch-LassySmall UD_English UD_English-LinES UD_English-PUD UD_English-ParTUT UD_Estonian UD_Finnish UD_Finnish-FTB UD_Finnish-PUD UD_French UD_French-FTB UD_French-PUD UD_French-ParTUT UD_French-Sequoia UD_Galician UD_Galician-TreeGal UD_German UD_German-PUD UD_Gothic UD_Greek UD_Hebrew UD_Hindi UD_Hindi-PUD UD_Hungarian UD_Indonesian UD_Irish UD_Italian UD_Italian-PUD UD_Italian-ParTUT UD_Italian-PoSTWITA UD_Japanese UD_Japanese-PUD UD_Kazakh UD_Korean UD_Kurmanji UD_Latin UD_Latin-ITTB UD_Latin-PROIEL UD_Latvian UD_Lithuanian UD_Marathi UD_North_Sami UD_Norwegian-Bokmaal UD_Norwegian-Nynorsk UD_Norwegian-NynorskLIA UD_Old_Church_Slavonic UD_Persian UD_Polish UD_Portuguese UD_Portuguese-BR UD_Portuguese-PUD UD_Romanian UD_Romanian-Nonstandard UD_Russian UD_Russian-PUD UD_Russian-SynTagRus UD_Sanskrit UD_Serbian UD_Slovak UD_Slovenian UD_Slovenian-SST UD_Spanish UD_Spanish-AnCora UD_Spanish-PUD UD_Swedish UD_Swedish-LinES UD_Swedish-PUD UD_Swedish_Sign_Language UD_Tamil UD_Telugu UD_Turkish UD_Turkish-PUD UD_Ukrainian UD_Upper_Sorbian UD_Urdu UD_Uyghur UD_Vietnamese</code>
  * Create the release folder, copy there the repositories that contain .conllu data (skip empty repositories!) and erase files
    that should not be released (`.gitignore`, `.git`, `not-to-release`). Generate raw text files in the release folder:
    for each .conllu file there will be a corresponding .txt file.
  * Prepare the current content of the tools repository as a separate package, also without `.git` and `.gitignore`.
  * Prepare the current content of the docs repository as a separate package, also without `.git` and `.gitignore`.
    Note that this is archiving the MarkDown _source code_ of the documentation. See below for archiving the corresponding HTML.
  * The surface form of documentation (i.e. the web content visible to the reader) is automatically generated in a separate Github repository. WARNING! Many folders contain generated files `AUX.html` and `aux.html` (besides `AUX_.html` and `aux_.html`). These should _not_ be included in the package because that might prevent people from unpacking it in MS Windows (although some unpacking programs, like 7zip, will be able to overcome this by simply renaming the file to `_aux.html` before unpacking it). Note furthermore that we currently cannot force Jekyll (the page generator) to make all hyperlinks relative in order for the pages to work well offline. Many hyperlinks will be broken when viewing the pages, and the user will have to open individual pages from the file manager instead. However, it may still be useful to provide the HTML rendering, especially because of the embedded tree visualizations.
* Make the release packages temporarily available for download somewhere and ask the treebank providers to check them before we archive them in Lindat.
* Tag the current commit in all repositories with the tag of the current release (`git tag r2.1` for UD 2.1).
  Push the tag to Github: `git push origin --tags`.
  You may even tag a particular commit retroactively: `git tag -a r2.1 9fceb02`.
  If the repository is updated after you assigned the tag and you need to re-assign the tag to a newer commit,
  this is how you remove the tag from where it is now: `git tag -d r2.1`.
  And this is how you remove it from Github: `git push origin :refs/tags/r2.1`.
  WARNING: The following command tags all UD repositories, including those that are not part of the current release.<br />
  <code>for i in UD_* docs tools ; do echo $i ; cd $i ; git tag r2.1 ; git push --tags ; cd .. ; echo ; done</code>
* Update the list of licenses for Lindat. See the [LICENSE repository](https://github.com/UniversalDependencies/LICENSE).
  Send the new list to Lindat so they add it to their menu (they like to get it as a diff file against the previous license;
  they can be reached at lindat-help@ufal.mff.cuni.cz).
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
* Update the title page of Universal Dependencies. Send out announcement to ud@stp.lingfil.uu.se, corpora@uib.no, ACL list etc.
* Upload the data to the search engines (SETS, PML-TQ, Kontext etc.)

<small><code style='color:lightgrey'>
path=$(pwd) ;
cd /net/data ;
tar xzf $path/release-2.1/ud-treebanks-v2.1.tgz ;
mv ud-treebanks-v2.1 universal-dependencies-2.1 ;
cd $HAMLEDT ;
perl ./populate_ud21.pl ;
\# copy metadata to biblio
\# add list of treebanks to $HAMLEDT/normalize/Makefile
make qpmltq ;
</code></small>

## Removing test data before release 2.0

The Universal Dependencies release 2.0 in March 2017 will not contain test data (only training and development data will be
released). This is a temporary measure because of the CoNLL Shared Task 2017 in parsing UD. While the underlying text and v1
annotation is already known for most languages, the new v2 annotation (and possibly the text in case of new data split) should
be hidden until the shared task is over. The following commands were applied to all repositories (but we must also inform all
data providers that they are not supposed to put the test files back).

<pre>
for i in UD_* ; do pushd $i ; git checkout dev ; git pull --no-edit ; git rm *-test.conllu ; (echo '*-test.conllu' >> .gitignore) ; git add .gitignore ; git commit -a -m 'UDv2 test data must not appear on Github because of the CoNLL shared task.' ; git push ; popd ; echo ; done
</pre>
