---
layout: base
title:  'Dataset release checklist'
---

# Release checklist

This checklist is meant to provide guidance for teams contributing treebank data for a new release of Universal Dependencies. It is created for release v1.2 but applies, unless otherwise noted, to any upcoming release.

## Repository and files

Every language has its own GitHub repository called `UD_Language`, where `Language` is the name of the language. For example, the repository for Finnish is called `UD_Finnish`. Make sure to create the repository for your language if it does not already exist. 

Every language repository should contain the following five files (where `xx` is the ISO code for the given language):

1. `xx-ud-train.conllu`
2. `xx-ud-dev.conllu`
3. `xx-ud-test.conllu`
4. `README.txt` or `README.md`
5. `LICENSE.txt`

The first three files contain the treebank data split into a training, development and test set. These should be in `CONLL-U` format and conform to the universal guidelines. They need to be validated as described below. The `README.txt` file contains basic documentation of the treebank and machine-readable metadata for the UD main page (see below) and the `LICENSE.txt` specifies under what license the treebank is made available.

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

The readme file contains metadata used to generate the overview table on the UD main page: data source, license, genres, and documentation status. The format of this metadata is described [here](http://universaldependencies.github.io/docs/language_metadata.html)

## Validation

Automatic validation runs are available [here](http://universaldependencies.github.io/docs/validation.html).

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

## Language-specific guidelines

Every treebank should be accompanied by a set of language-specific guidelines at http://universaldependencies.github.io/docs/. These guidelines should minimally specify the following:

1. Tokenization: How was word segmentation performed? Does the treebank include multiword tokens?
2. POS tags: What universal POS tags (if any) are not used?
3. Features: What universal features are not used? What language-specific features/values have been added?
4. Relations: What universal relations are not used? What language-specific subtypes have been added?

There are <a href="contributing_language_specific.html">more detailed guidelines for language-specific documentation.</a>
Also see the general guidelines about <a href="contributing.html">how to contribute.</a>
