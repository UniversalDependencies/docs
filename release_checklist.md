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
3. ~~`xx-ud-test.conllu`~~ temporary rule for UD 2.0: **do not publish the test set!**
4. `README.txt` or `README.md`
5. `LICENSE.txt`

The first three files contain the treebank data split into a training, development and test set. These should be in `CONLL-U` format and conform to the universal guidelines. They need to be validated as described below.

The training-development-test data split should be stable across releases. It should not happen that a sentence that was once part of training data ever appears in the test data, and vice versa (except for sentences that are naturally occurring duplicates in independent texts). We want to prevent accidental misguided results of experiments where people take a parser trained on UD 1.1 and apply it to test data from UD 1.2. **We decided to make an exception to this rule for UD 2.0 where it is needed to achieve 10K test or dev, on the ground that v2 annotation is not backward-compatible anyway.**

The `README.txt` file contains basic documentation of the treebank and machine-readable metadata for the UD main page (see below) and the `LICENSE.txt` specifies under what license the treebank is made available.

Repositories of released treebanks also contain a `stats.xml` file, which is generated as part of the release-building process, using the script `conllu-stats.pl` available from the `tools` repository. Data providers do not have to care about this file.

## The README file

The `README` file should minimally contain the following information:

1. A description of the treebank and its origin (creation method, data sources, etc.)
2. A description of how the data was split into training, development and test sets
3. Basic statistics about number of sentences, tokens, etc.
4. Acknowledgments and references that should be cited when using the treebank
5. A machine-readable section with language metadata. This is described [here](

Note that the basic statistics can be produced using the script `conllu-stats.py`available from the `tools` repository and run as follows:

    $ python conllu-stats.py --stats ../UD_Finnish/*.conllu

For previously released corpora, the README file should also include a "[changelog](http://en.wikipedia.org/wiki/Changelog)" section summarizing changes between versions e.g. as follows

```
Changelog

2015-05-15 v1.1

    * Added lemmas

    * Corrected tokenization in sentences 123 and 456
```

## Language metadata

The readme file contains metadata used to generate the overview table on the UD main page: data source, license, genres, and documentation status. The format of this metadata is described [here](http://universaldependencies.org/language_metadata.html)

The table on the front page is automatically generated from special lines in the `README.txt` or `README.md` file for every language. This means that in order to add a new language, also its repository must be created, minimally with the readme file. Here is an example of the language metadata block from the [Finnish README file](https://github.com/UniversalDependencies/UD_Finnish/blob/master/README.txt) 

    Documentation status: complete
    Data source: semi-automatic
    Data available since: UD v1.0
    License: CC BY-SA 4.0
    Genre: blog wiki legal news fiction
    Contributors: Ginter, Filip; Kanerva, Jenna; Laippala, Veronika; Missilä, Anna; Pyysalo, Sampo

This block can be anywhere in the readme file. The properties are as follows:

* `Documentation status` can be `complete`, `partial`, or `stub`.
* `Data source` can be `automatic`, `semi-automatic`, or `manual`. Here, as a rough guidance, `manual` means that every word of every sentence has been manually checked, whereas `semi-automatic` means an automatic conversion with major manual checks of various types of constructions.
* `Data available since` can be `UD v1.0`, `UD v1.1`, `UD v1.2`, and `UD v1.3`. As the current release is 1.2, new languages which will be included in 1.3 should set this property accordingly.
* `License`: anything containing the string `BY-NC-SA` will be given the CC non-commercial logo, `BY-SA` or `BY` the CC logo, and `GNU` the GNU logo. To add any other license, please provide a suitable icon to ginter@cs.utu.fi and sampo.pyysalo@gmail.com.
* `Genre`: this is simply a space-separated list of genres which gets mapped into symbols in the table. The possible genres are listed in [this file](https://github.com/UniversalDependencies/docs/blob/pages-source/gen_index/genre_symbols.json) in the repository. If you don't see yours, just edit the file on GitHub and add your genre, choosing one of the symbols from [the *FontAwesome* list](https://fortawesome.github.io/Font-Awesome/icons/). Please make sure you get the syntax right, since this is a machine-readable JSON file. It is also possible to not add the genre to the `genre_symbols.json` file, in which case the default symbol will be used automatically. The genre name will still remain visible in the mouse-over tooltip.
* `Contributors`: the list of contributors to be included with the data release and in the LINDAT download page. This is a semi-colon separated list where every name is in the `Last, First` form and the readme file should be utf-8 encoded to make sure special characters are preserved correctly.

## Repository branches

While the official UD release is always through Lindat, many users of UD source their data from the GitHub language repositories. Therefore, the `master` branch of every language should contain the last, officially released version of the data for the given language. The development in between releases should happen on the `dev` branch of the repository.

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
