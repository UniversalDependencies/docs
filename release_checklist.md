---
layout: base
title:  'Dataset release checklist'
---

# Release checklist

This check list is meant to provide guidance for teams contributing treebank data for a new release of Universal Dependencies. It is created for release v1.2 but applies, unless otherwise noted, to any upcoming release.

## Repository

Every language has its own GitHub repository called ``UD\_Language``, where ``Language`` is the name of the language. For example, the repository for Finnish is called ``UD\_Finnish``. Make sure to create the repository for your language if it does not already exist. 

Every language repository should contain the following five files (where `xx` is the ISO code for the given language):

 1. ``LICENSE``
 2. ``README``
 3. ``xx-ud-dev.conllu``
 4. ``xx-ud-test.conllu``
 5. ``xx-ud-train.conllu``

## Documentation

TODO (@jnivre)

## Validation

The final data validation is an important step and each file released
in the project is expected to validate as conforming to the basic
requirements on the data and format. For this purpose, there is a
validation script in the tools repository.

    $ git clone git@github.com:UniversalDependencies/tools.git
    $ cd tools
    $ python validate.py -h

In general, you validate the data like so:

    python validate.py --noecho --lang=xx [file.conllu]

for example for Finnish:

    $ python validate.py --noecho --lang=fi ../UD_Finnish/fi-ud-dev.conllu 
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


