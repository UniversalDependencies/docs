---
layout: base
title:  'UD new language checklist'
udver:  '2'
---

This checklist describes the steps needed in order to add a new language or treebank to UD.
It is meant for the maintenance task force rather than individual treebank teams.
See [here](release_checklist.html) for the checklist for data contributors.

# How to add a language to UD

* Make sure the language name, ISO code, family and flag is listed in docs-automation in `codes_and_flags.yaml`.
* Create the language collection in the docs repository. Run `addlanguage.sh langcode langname flagcode`
  (If the name of the language consists of multiple words, replace spaces by underscores.)
  * A [template for the language documentation page](https://github.com/UniversalDependencies/docs/blob/pages-source/_template/template-index.md) will be also created. How to force the contributors
    to fill it with contents? (Note that the page must also be renamed from template-index.md to index.md.)
* Create at least one treebank repository in that language (see the steps below).
* See the README.md file in docs-automation. Perform the steps necessary to regenerate the “accordion tables”
  of treebanks on the front page of Universal Dependencies.

# How to add a treebank to UD

* If this is the first UD treebank of its language, see above for how to add the language.
* Create a new Github repository called UD_${language}-${treebank} where ${language} is the
  English name of the language (if it consists of multiple words, replace spaces by underscores)
  and ${treebank} is an acronym or a short word identifying the treebank (only English letters,
  CamelCase, no digits or special characters). Example: "UD_Ancient_Greek-PROIEL".
* Populate README.md, CONTRIBUTING.md and LICENSE.txt with default values.
* Create two branches, "master" and "dev". Protect the master branch so that only the core group
  can push to it.
* Make the dev branch writable by the Contributors team (by default they cannot push to the repository
  at all).
* Clone the repository to Dan's local system.
* Clone the repository to Dan's validation server (`quest`) and ask Filip to add it to his validation infrastructure.

# How to rename a treebank in UD

Normally, the names of the treebank repositories should be stable because the infrastructure depends on them
(which is also partially illustrated by this section). However, between releases 2.1 and 2.2 we want to rename
the repositories that were so far named only by language (e.g., UD_Czech) so that all repository names also
contain a treebank-specific suffix (e.g., UD_Czech-PDT, where PDT is the suffix). The change of the name involves
at least the following steps:

1.  Go to the Settings tab of the website of the repository. Change the name (e.g. from "UD_Czech" to "UD_Czech-PDT") and click the Rename button.
2.  Go to the server where the automatic validation and evaluation runs (currently quest.ms.mff.cuni.cz, operated by Dan).
    Remove the old clone of the repository and the reports from validation and evaluation.
    <pre>oldrepo=UD_Czech
rm -rf $oldrepo
rm log/$oldrepo.log
rm log/$oldrepo.eval.log
grep -v -P '^'$oldrepo':' validation-report.txt > /tmp/newreport.txt
mv /tmp/newreport.txt validation-report.txt
chmod 666 validation-report.txt
grep -v -P '^'$oldrepo'\t' evaluation-report.txt > /tmp/newreport.txt
mv /tmp/newreport.txt evaluation-report.txt
chmod 666 evaluation-report.txt</pre>
3.  Call docs-automation/valdan/clone_one.sh UD_Czech-PDT.
4.  Go to one of the places where you have local clones of all UD repositories. Remove the old clone.
    Create a new clone under the new name. Check out the dev branch.
5.  Rename the data files in the dev branch (e.g. from "cs-ud-test.conllu" to "cs_pdt-ud-test.conllu").
6.  Check the README.md and LICENSE.txt files for any mentions of the treebank name that may have to be modified.
    In the README file, add a line to the Changelog, e.g.:
    <pre>* 2018-04-15 v2.2
  * Repository renamed from UD_Czech to UD_Czech-PDT.</pre>
7.  Commit and push the changes. This should also trigger an automatic re-validation of the treebank under the new name.
8.  Go to the `tools` repository to the script `check_files.pl` and locate the function `check_metadata()`.
    There is a back up list of treebanks and their "Data available since" metadata. Replace `UD_Czech` with `UD_Czech-PDT`,
    keeping it in the list for the release where `UD_Czech` appeared for the first time.
9.  Go to the `docs-automation` repository to the script `valdan/update-validation-report.pl`.
    Inspect the two lists of treebanks in the `BEGIN` block and replace each occurrence of `UD_Czech` with `UD_Czech-PDT`.
10. If there are other places where you maintain local clones of UD repositories (e.g., one is your laptop and the other is your
    university network), go to each of them, do a new git clone ; git checkout dev ; rm old clone.
11. Finally, we want to regenerate the title page of Universal Dependencies.
    Go to docs-automation. Assumption: all UD treebank repositories, and the docs repository are cloned as siblings of docs-automation
    in the file-folder hierarchy. They are switched to the dev branch. (It does not matter for us because we will switch them to
    master in any case; but we assume that we do this temporarily, and we will switch back to dev when we are done.)
12. Remove the old cached metadata:
    <pre>rm _corpus_metadata/UD_Czech.json</pre>
13. Generate new metadata for the treebank (this script switches the repo temporarily to master):
    <pre>./refresh_corpus_data.sh ../UD_Czech-PDT</pre>
14. Regenerate the UD title page and push it to Github:
    <pre>make dan
cd ../docs
git pull --no-edit</pre>
15. Rename the folder with the treebank hub page in the `docs` repository. Then push the changes.
    <pre>git mv treebanks/cs treebanks/cs_pdt
git status
git diff</pre> then press Q and
    <pre>git commit -a -m 'Renamed treebank repository.'
git push
cd ..</pre>
