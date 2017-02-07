---
layout: base
title:  'Dataset release checklist'
udver: '2'
---

# Release checklist

This checklist is meant to provide guidance for teams contributing treebank data for a new release of Universal Dependencies. It was created for release v1.2 and applies, unless otherwise noted, to any upcoming release.

Contents:

* [Executive summary](#executive-summary)
* [Repository and files](#repository-and-files)
  - [Language metadata](#language-metadata)
  - [Repository branches](#repository-branches)
* [Validation](#validation)
  - [Data format and repository](#data-format-and-repository)
  - [Syntax](#syntax)
* [Language-specific guidelines](#language-specific-guidelines)

# Executive summary

* Make sure [your repository has the right files](#repository-and-files), [correct metadata](#language-metadata) in the README, and data being prepared for the next release [lives on the `dev` branch](#repository-branches).
* Make sure your data and repository pass the [format validation](#data-format-and-repository): [direct link](http://universaldependencies.org/validation.html) to the format validator output.
* Make sure your data does not show major deviations in the [content validation](#syntax): [direct link](http://universaldependencies.org/svalidation.html) to the content validator output.

# Repository and files

Every language has its own GitHub repository called `UD_Language`, where `Language` is the name of the language. For example, the repository for Finnish is called `UD_Finnish`. Make sure to create the repository for your language if it does not already exist. Some languages have more than one treebank and the additional treebanks have their own repositories with a `-Treebank` identifier after the language name. For example, `UD_Finnish-FTB` is the repository for the FinnTreeBank, while the plain `UD_Finnish` holds the Turku Dependency Treebank.

Every language repository should contain the following five files (where `xx` is the ISO code for the given language; if this is not the first treebank for the language, use `xx_y` instead, where `y` is the lowercased treebank identifier):

1. `xx-ud-train.conllu`
2. `xx-ud-dev.conllu`
3. <del>xx-ud-test.conllu</del> temporary rule for UD 2.0: **do not publish the test set!** Validate it offline and then send it by e-mail to ud.conll.shared.task.2017@gmail.com.
4. `README.txt` or `README.md`
5. `LICENSE.txt`

The first three files contain the treebank data split into a training, development and test set. These should be in `CONLL-U` format and conform to the universal guidelines. They need to be validated as described below.

If the treebank consists of more than 20,000 words, make the test set and dev set at least 10,000 words each, even if it leaves you with training data smaller than development data (that is [necessary for the CoNLL 2017 shared task](http://universaldependencies.org/conll17/inclusion-rules.html)). There is no upper limit on the size of dev/test. If you cannot reach 10,000 words of test data, use a more typical split, e.g. 80-10-10% (but the treebank will not be included in the shared task).

The training-development-test data split should be stable across releases. It should not happen that a sentence that was once part of training data ever appears in the test data, and vice versa (except for sentences that are naturally occurring duplicates in independent texts). We want to prevent accidental misguided results of experiments where people take a parser trained on UD 1.1 and apply it to test data from UD 1.2. **We decided to make an exception to this rule for UD 2.0 where it is needed to achieve 10K test or dev, on the ground that v2 annotation is not backward-compatible anyway.**

The `README.txt` file contains basic documentation of the treebank and machine-readable metadata for the UD main page (see below) and the `LICENSE.txt` specifies under what license the treebank is made available.

Repositories of released treebanks also contain a `stats.xml` file, which is generated as part of the release-building process, using the script `conllu-stats.pl` available from the `tools` repository. Data providers do not have to care about this file.

## The README file

The `README` file should minimally contain the following information:

1. A description of the treebank and its origin (creation method, data sources, etc.)
2. A description of how the data was split into training, development and test sets
3. Basic statistics about number of sentences, tokens, etc.
4. Acknowledgments and references that should be cited when using the treebank
5. A machine-readable section with language metadata. This is described below.

Note that the basic statistics can be produced using the script `conllu-stats.py`available from the `tools` repository and run as follows:

    $ python conllu-stats.py --stats ../UD_Finnish/*.conllu

For previously released corpora, the README file should also include a "[changelog](http://en.wikipedia.org/wiki/Changelog)" section summarizing changes between versions e.g. as follows

<pre>
Changelog

2015-05-15 v1.1
    * Added lemmas
    * Corrected tokenization in sentences 123 and 456
</pre>

## Language metadata

The readme file contains metadata used to generate the overview table on the UD main page: data source, license, genres, and documentation status. The format of this metadata is described [here](http://universaldependencies.org/language_metadata.html)

The table on the front page is automatically generated from special lines in the `README.txt` or `README.md` file for every language. This means that in order to add a new language, also its repository must be created, minimally with the readme file. Here is an example of the language metadata block from the [Finnish README file](https://github.com/UniversalDependencies/UD_Finnish/blob/master/README.txt) 

    Documentation status: complete
    Data source: semi-automatic
    Data available since: UD v1.0
    License: CC BY-SA 4.0
    Genre: blog wiki legal news fiction
    Contributors: Ginter, Filip; Kanerva, Jenna; Laippala, Veronika; Missilä, Anna; Pyysalo, Sampo
    Contact: turku@treebank.org

This block can be anywhere in the readme file. The properties are as follows:

* `Documentation status` can be `complete`, `partial`, or `stub`.
* `Data source` can be `automatic`, `semi-automatic`, or `manual`. Here, as a rough guidance, `manual` means that every word of every sentence has been manually checked, whereas `semi-automatic` means an automatic conversion with major manual checks of various types of constructions.
* `Data available since` can be `UD v1.0`, `UD v1.1`, `UD v1.2`, `UD v1.3`, `UD v1.4`, and `UD v2.0`. As the current release is 1.4, new languages which will be included in 2.0 should set this property accordingly.
* `License`: anything containing the string `BY-NC-SA` will be given the CC non-commercial logo, `BY-SA` or `BY` the CC logo, and `GNU` the GNU logo. To add any other license, please provide a suitable icon to ginter@cs.utu.fi and sampo.pyysalo@gmail.com.
* `Genre`: this is simply a space-separated list of genres which gets mapped into symbols in the table. The possible genres are listed in [this file](https://github.com/UniversalDependencies/docs/blob/pages-source/gen_index/genre_symbols.json) in the repository. If you don't see yours, just edit the file on GitHub and add your genre, choosing one of the symbols from [the *FontAwesome* list](https://fortawesome.github.io/Font-Awesome/icons/). Please make sure you get the syntax right, since this is a machine-readable JSON file. It is also possible to not add the genre to the `genre_symbols.json` file, in which case the default symbol will be used automatically. The genre name will still remain visible in the mouse-over tooltip.
* `Contributors`: the list of contributors to be included with the data release and in the LINDAT download page. This is a semi-colon separated list where every name is in the `Last, First` form and the readme file should be utf-8 encoded to make sure special characters are preserved correctly.
* `Contact`: please add an e-mail address where the current maintainer of the data can be contacted. You can also include several e-mail addresses separated by commas.

## Repository branches

While the official UD release is always through Lindat, many users of UD source their data from the GitHub language repositories. Therefore, the `master` branch of every language should contain the last, officially released version of the data for the given language. The development in between releases should happen on the `dev` branch of the repository.
Although it is currently not locked, treebank maintainers should never touch the `master` branch, they should always push to `dev`. At release time, the release task force will take care of merging the contents of the `dev` branch into `master`.

(To make things a bit more confusing, this policy of data repositories does not apply to some other repositories that we use. In the `docs` repository you must work with the `pages-source` branch. That is done automatically if you edit the documentation in your browser via the _edit page_ link. You will also need to access the `tools` repository and upload the `deprel` and `feat_val` files specific for your treebank. In this case, please use the `master` branch.)

If you have no previous experience with Git, here is a quick tutorial on how to deal with the branches. Please refer to on-line documentation of Git and Github for more details. The tutorial assumes that you are communicating with Github from a Linux shell. The interface may be different if your OS is Windows. If you are working only with the Github web interface, you are not dependent on your operating system but you must remember to switch the `Branch: master` drop-down menu (left-hand side of the page) to `Branch: dev`; it always starts in `master` by default. In contrast, when you want to clone the repository to your local system, you need the address that is hidden under `Clone or download` in the right-hand side of the page, and that address is common for all branches. Our example is the [Italian repository](https://github.com/UniversalDependencies/UD_Italian/tree/dev). Here is how you clone the repo to your system (`git clone` is the command, the remainder is the address copied from the Github web):

<pre>
git clone git@github.com:UniversalDependencies/UD_Italian.git
<span style="color:blue">Cloning into 'UD_Italian'...
remote: Counting objects: 215, done.
remote: Total 215 (delta 0), reused 0 (delta 0), pack-reused 215
Receiving objects: 100% (215/215), 6.98 MiB | 4.55 MiB/s, done.
Resolving deltas: 100% (134/134), done.
Checking connectivity... done.</span>
</pre>

Then enter the cloned folder and switch to ("checkout") the `dev` branch. Your copy of the repository knows that such a branch exists on the server but it only creates your local copy of that branch once you ask for it. You may subsequently want to call `git pull` to make sure that you have the latest contents of the dev branch from the server:

<pre>
cd UD_Italian
git checkout dev
<span style="color:blue">Branch dev set up to track remote branch dev from origin.
Switched to a new branch 'dev'</span>
git branch
<span style="color:blue">* dev
master</span>
git pull
<span style="color:blue">Already up-to-date.</span>
</pre>

Once you do this, you are all set. Your copy will stay switched to the dev branch unless you call `git checkout master` (or other `git checkout`) again. You will probably mostly need just `git status`, `git diff`, `git add`, `git commit`, `git push` and `git pull` commands. All pushes and pulls will be done against the remote `dev` branch.



# Validation

## Data format and repository

Up-to-date automatic validation runs of the repositories are available [here](http://universaldependencies.org/validation.html). These are based on the `dev` branch of the data and use the `validate.py` script described below.

The final data validation is an important step and each file released
in the project is expected to validate as conforming to the basic
requirements on the data and format. For this purpose, there is a
validation script in the tools repository.

    $ git clone git@github.com:UniversalDependencies/tools.git
    $ cd tools
    $ python validate.py -h

In general, you validate the data like so:

    python validate.py --lang=xx [file.conllu]

for example for Finnish:

    $ python validate.py --lang=fi ../UD_Finnish/fi-ud-dev.conllu 
    *** PASSED ***

Among other items, the script also validates the language-specific set
of tags and relations and therefore it needs to know about these. The
language-specific lists are stored in `data/deprel.xx`
(language-specific relations) and `data/feat_val.xx`
(language-specific features). In addition `data/*.ud` stores the UD
taglists. Before you can validate data for a given language, you need to
produce and commit the necessary tag lists. You can make the initial lists
like so:

    $ python conllu-stats.py --deprels=langspec path_to_your_data/*.conllu > data/deprel.xx
    $ python conllu-stats.py --catvals=langspec path_to_your_data/*.conllu > data/feat_val.xx

This will gather the language-specific lists in descending order by
their frequency. It is important to check the resulting files for
correctness, because otherwise the validation would of course be a
no-op. Once you have checked the lists manually, you can add them to
the repository:

    $ git add data/deprel.xx data/feat_val.xx
    $ git commit -m "Adding language-specific data for xx."
    $ git push

Since the `v2.0` release, whitespace is allowed in the `FORM` and `LEMMA` fields under conditions specified in [here](v2/segmentation.html). This is supported in the validator through the UD-wide file `data/tokens_w_space.ud` and its language-specific variants `data/tokens_w_space.xx`. In these files, each line is a [Python regular expression](https://docs.python.org/2/library/re.html) defining the permissible forms and lemmas that can contain a whitespace.

# Syntax

For the `v1.3` release, we have created an additional number of tests which try to uncover possible logical inconsistencies in the treebank data. Automatic validation runs for this syntax validation are available [here](http://universaldependencies.org/svalidation.html). Unlike the data format and repository validation, this validation machinery is not streamlined enough to be distributed for offline use, therefore it is important to regularly push your data to the `dev` branch of the repository.

The tests are specified in the file `gen_index/stests.yaml` and rely on the query language of the [SETS search interface](http://bionlp-www.utu.fi/dep_search).

# Language-specific guidelines

Every treebank should be accompanied by a set of language-specific guidelines at http://universaldependencies.org/. These guidelines should minimally specify the following:

1. Tokenization: How was word segmentation performed? Does the treebank include multiword tokens?
2. POS tags: What universal POS tags (if any) are not used?
3. Features: What universal features are not used? What language-specific features/values have been added?
4. Relations: What universal relations are not used? What language-specific subtypes have been added?

There are <a href="contributing_language_specific.html">more detailed guidelines for language-specific documentation.</a>
Also see the general guidelines about <a href="contributing.html">how to contribute.</a>

# Building the release

Documentation of the steps to be taken by the release task force is [on a separate page](release_checklist_task_force.html).
