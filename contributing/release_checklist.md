---
layout: base
title:  'Dataset release checklist'
udver: '2'
redirect_from: "/release_checklist.html"
---

# Release checklist

This checklist is meant to provide guidance for teams contributing treebank data for a new release of Universal Dependencies.
It was created for release v1.2 and applies, unless otherwise noted, to any upcoming release.

Contents:

* [New language or treebank](#new-language-or-treebank)
* [Executive summary](#executive-summary)
* [Repository and files](#repository-and-files)
* [Validation](#validation)
* [Fixing errors in treebanks](#fixing-errors-in-treebanks)
* [Language-specific guidelines](#language-specific-guidelines)

# New language or treebank

See [Adding new language or treebank to UD](/contributing/adding_language_treebank.html).

# Executive summary

* Make sure [your repository has the right files](#repository-and-files), [correct metadata](#treebank-metadata) in the README, and data being prepared for the next release [lives on the `dev` branch](#repository-branches).
* Make sure your data and repository pass the [format and content validation](#validation): [direct link](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/validation-report.pl) to the validator output.

# Repository and files

See [Repository and files](/contributing/repository_files.html)

# Validation

Up-to-date automatic validation runs of the repositories are available
[here](http://quest.ms.mff.cuni.cz/udvalidator/). Depending on the size of the treebank, the report
will be updated within one to twenty minutes after pushing changes to Github. The report is based
on the `dev` branch of the data and combines the output of two scripts: `check_files.pl` and
`validate.py`. The former checks whether the treebank repository contains the expected files,
whether the metadata in `README` look good and whether the language-specific documentation exists
in the `docs` repository. The latter checks the actual contents of the CoNLL-U files within the
treebank. This is the official UD validator, described in more detail below. You may want to
download `validate.py` and check your data locally before uploading them; but even if you do so,
always check the on-line validation report after uploading any changes to your repository. If you
run your local validator with wrong configuration (or if you do not have the latest version of the
validator), you may be led to think that your treebank is in good shape, while the fact is that the
server will reject it.

See a separate page on [validation rules](/contributing/validation-rules.html), which explains the various
validation levels, as well as the consequences of your treebank's not being valid at release time.

The validation script is available in the [tools](https://github.com/UniversalDependencies/tools)
repository and you can use it to test your data locally before you upload them to Github. Make sure
that you always have the latest update of the tools repository.

    $ git clone git@github.com:UniversalDependencies/tools.git
    $ cd tools
    $ python validate.py -h

Note that you need Python 3 to run the validator, and you need a third-party
Python module called `regex` installed via pip, so when needed try this before
invoking the validator:

    $ sudo apt-get install python3-pip; python3 -m pip install regex

See also the [README file](https://github.com/UniversalDependencies/tools/blob/master/README.md)
in the tools repository.

In general, you validate the data like so:

    $ python validate.py --lang=xx --max-err=0 [file.conllu]

for example for Finnish:

    $ python validate.py --lang=fi --max-err=0 ../UD_Finnish-TDT/fi_tdt-ud-dev.conllu
    *** PASSED ***

Among other items, the script also validates the language-specific set
of morphological features and relations and therefore it needs to know about these.
Until release 2.7, language-specific lists were stored in the `data` folder in the `tools`
repository and they could be edited directly by users working on individual languages. This
practice is now deprecated. The `data` folder will contain necessary information in JSON files
that cannot be edited directly. Instead, language-specific labels will be registered through
a web interface and the data in the `tools` repository will be automatically updated when a change
is saved in the web interface.

At present, morphological features can be registered
[here](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_feature.pl),
dependency relations for basic trees
[here](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_deprel.pl) and
case markers for enhanced relations
[here](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_edeprel.pl).

It is possible to register language-specific features and relations only if they
[have been properly documented](/contributing/contributing_language_specific.html). If a feature or relation does not have
its own documentation page in the `docs` repository (either as part of the universal guidelines
or in the language-specific folder), or if the page is not in the prescribed (machine-recognizable)
format, the web interface will not allow to register the feature or relation as valid, and consequently, the
validator will not accept it in the data.

Since the `v2.0` release, whitespace is allowed in the `FORM` and `LEMMA` fields under conditions
specified [here](v2/segmentation.html). This is supported in the validator through the UD-wide
file `data/tokens_w_space.ud` and its language-specific variants `data/tokens_w_space.xx`. In
these files, each line is a [Python regular expression](https://docs.python.org/3/library/re.html)
defining the permissible forms and lemmas that can contain a whitespace.

The validator also checks that certain closed classes (currently auxiliaries and copula) appear
only with documented lemmas. Since release 2.7, auxiliaries can be [defined at the on-line validation
site](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_auxiliary.pl).
When adding an auxiliary (or the copula), the user can see some relevant points from the UD
guidelines, as well as the list of auxiliaries that have been defined in other languages
(related languages are shown first). This is to improve cross-lingual parallelism and to reduce
the danger that maintainers of neighboring languages will employ dramatically different interpretations
of the guidelines and end up with divergent notions of what qualifies as an auxiliary.
All auxiliaries must be explained and accompanied by an example; in the future, the information
collected this way could be propagated to the UD documentation. The site initially includes some
auxiliaries that were previously listed (but not documented) in the source code of the validator.
The user has to provide the missing information for all existing auxiliaries before they can add
new ones.

When validating language-specific lists of morphological features, auxiliary verbs etc., the validator
can temporarily switch to a language different from the main language of the file. This is useful
in cases of code-switching, i.e., when a foreign language phrase is inserted in the text, and the
annotators decided to annotate it according to the foreign language guidelines (instead of simply
tagging everything as `X` and connecting it as a `flat` structure). The alternative language is
signaled for individual tokens using the `Lang` attribute in the MISC column. Its value is the ISO
639 language code, as registered for the language in UD (either two letters from ISO 639-1, or
three letters from ISO 639-3, lowercased!)

Some additional tests are available in the
[Udapi](https://github.com/udapi/udapi-python/blob/master/udapi/block/ud/markbugs.py)
tool. They may reveal configurations that are not necessarily invalid but are suspicious and should be checked manually.



# Fixing errors in treebanks

Previously released treebanks are not always perfect and they may contain inconsistencies or errors.
In some cases new tests are implemented in the official validator and new errors are discovered in
previously valid treebanks. Other errors or inconsistencies cannot be detected by the validator but
they can be spotted and reported by human users.

It is primarily the responsibility of the data providers (or of current treebank maintainers, if
the treebank was adopted by a new team) to fix these errors. However, we want to encourage contributions
from non-maintainers of a treebank in the form of pull requests. Such pull requests must be based on
the previous contents of the dev branch (not the master branch, as it may contain files that would
render the dev branch invalid!) and they must be directed again at the dev branch (never the master
branch). Submitting a pull request does not automatically mean that the treebank maintainer must
accept it (in particular, some treebanks are maintained outside UD and then automatically converted
to UD), but the maintainers should respond to the request, and if they do not accept and merge it,
other possible solutions should be discussed.

We expect that the treebank maintainers would consider such requests within 6 months. If no response
is received from maintainers, the UD infrastructure maintainers have the authority to assume
responsibility for reviewing and accepting the pull request.



# Language-specific guidelines

Every language should have a set of language-specific guidelines at [http://universaldependencies.org/](http://universaldependencies.org/).
If there are multiple UD treebanks in one language, all should follow the same language-specific
guidelines. It is common responsibility of the teams providing the treebanks to also provide the
language-specific documentation.

There are [guidelines specifying the requirements on
language-specific documentation.](/contributing/contributing_language_specific.html) Also see the general guidelines about
[how to contribute](/contributing/editing.html) (which covers the conventions used in writing UD
documentation, such as how to format examples).
