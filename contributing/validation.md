---
layout: base
title: 'Validation'
udver: '2'
---

# Validation

Contents and quick links:
* [Online validation report](http://quest.ms.mff.cuni.cz/udvalidator/)
* [Validation rules](/contributing/validation-rules.html)
* [Language-specific lists](#language-specific-lists)
  * [Auxiliaries and copulas](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_auxiliary.pl)
  * [Feature-value-UPOS combinations](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_feature.pl)
  * [Dependency relation subtypes](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_deprel.pl)
  * [Enhanced relation subtypes](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_edeprel.pl)
  * [Tokens with spaces](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_token_with_space.pl)
* [Running the validator locally](#running-the-validator-locally)
* [Udapi MarkBugs](#udapi-markbugs)

Both the language-specific documentation and the contents of the treebank repositories are automatically
checked by several scripts after each change pushed to GitHub. Treebanks that do not successfully pass
all tests cannot be released. See also a separate page on [validation rules](/contributing/validation-rules.html),
which explains the various validation levels, as well as the consequences of your treebank's not being
valid at release time.

Up-to-date automatic validation runs of the repositories are available
[here](http://quest.ms.mff.cuni.cz/udvalidator/). Depending on the size of the treebank, the report
will be updated within one to thirty minutes after pushing changes to GitHub. The report is based
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

## Language-specific lists

Among other items, the validator also validates the language-specific set of morphological features and
relations and therefore it needs to know about these. They can be registered through a web interface:

* Morphological features [here](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_feature.pl)
* Dependency relations for basic trees [here](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_deprel.pl)
* Case markers for enhanced relations [here](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_edeprel.pl)

It is possible to register language-specific features and relations only if they
[have been properly documented](/contributing/language_specific.html). If a feature or relation does not have its own
documentation page in the `docs` repository (either as part of the universal guidelines or in the language-specific
folder), or if the page is not in the prescribed (machine-recognizable) format, the web interface will not allow to
register the feature or relation as valid, and consequently, the validator will not accept it in the data.

Since the `v2.0` release, whitespace is allowed in the `FORM` and `LEMMA` fields under conditions specified
[here](v2/segmentation.html). This is supported in the validator through
[Python regular expressions](https://docs.python.org/3/library/re.html) defining the permissible forms and lemmas that
can contain a whitespace. These are registered for every language analogously to features and relations:

* Tokens with spaces [here](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_token_with_space.pl)

The validator also checks that certain closed classes (currently auxiliaries and copula) appear only with documented
lemmas. Since release 2.7, auxiliaries can be defined at the on-line validation site:

* Auxiliaries and copulas [here](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_auxiliary.pl)

When adding an auxiliary (or the copula), the user can see some relevant points from the UD guidelines, as well as the
list of auxiliaries that have been defined in other languages (related languages are shown first). This is to improve
cross-lingual parallelism and to reduce the danger that maintainers of neighboring languages will employ dramatically
different interpretations of the guidelines and end up with divergent notions of what qualifies as an auxiliary. All
auxiliaries must be explained and accompanied by an example; in the future, the information collected this way could
be propagated to the UD documentation. The site initially includes some auxiliaries that were previously listed (but
not documented) in the source code of the validator. The user has to provide the missing information for all existing
auxiliaries before they can add new ones. (As soon as you edit the first undocumented auxiliary, all other undocumented
auxiliaries will be removed from the database to make room for the new and proper definitions. You should thus not stop
after the first auxiliary. You should document all the others so that no existing treebanks suddenly become invalid.)

When validating language-specific lists of morphological features, auxiliary verbs etc., the validator can temporarily
switch to a language different from the main language of the file. This is useful in cases of code-switching, i.e.,
when a [foreign language phrase is inserted](/foreign.html) in the text, and the annotators decided to annotate it
according to the foreign language guidelines (instead of simply tagging everything as `X` and connecting it as a `flat`
structure). The alternative language is signaled for individual tokens using the `Lang` attribute in the MISC column.
Its value is the ISO 639 language code, as registered for the language in UD (either two letters from ISO 639-1, or
three letters from ISO 639-3, lowercased!)

## Running the validator locally

**WARNING:** `validate.py` is only one of the scripts that are used to verify whether your treebank is good for the
next release. Even if you run it on your computer and it tells you “PASSED”, you must check the [online validation
report](http://quest.ms.mff.cuni.cz/udvalidator/) after you push changes to GitHub. Only if your treebank is reported
there as “VALID”, you are all set.

The validation script is available in the [tools](https://github.com/UniversalDependencies/tools) repository and you
can use it to test your data locally before you upload them to GitHub. Make sure that you always have the latest update
of the tools repository.

    $ git clone git@github.com:UniversalDependencies/tools.git
    $ cd tools
    $ python validate.py -h

Note that you need Python 3 to run the validator, and you need some third-party Python modules. One such module is
called `regex` and you can install it via pip before invoking the validator:

    $ sudo apt-get install python3-pip; python3 -m pip install regex

Furthermore, you need Python version of [Udapi](https://udapi.github.io/). See its website for instructions how to
install it. You could install it via pip as well, but it is probably better to clone `udapi-python` from GitHub and
then install its requirements. This way you will be able to get the latest version of Udapi if it changes on GitHub
but not in pip.

See also the [README file](https://github.com/UniversalDependencies/tools/blob/master/README.md) in the tools
repository.

In general, you validate the data like so:

    $ python validate.py --lang=xx --max-err=0 [file.conllu]

for example for Finnish:

    $ python validate.py --lang=fi --max-err=0 ../UD_Finnish-TDT/fi_tdt-ud-dev.conllu
    *** PASSED ***

The `tools` repository also contains a `data` folder with JSON files that hold the language-specific
features, auxiliaries etc. that have been registered online. These JSON files **cannot be edited
directly!** If you edit your local copy or even if you try to push your changes to GitHub, the files
will be overwritten at the moment when someone edits anything in the online registration system.

## Udapi MarkBugs

Some additional tests are available in the
[Udapi](https://github.com/udapi/udapi-python/blob/master/udapi/block/ud/markbugs.py)
tool. They may reveal configurations that are not necessarily invalid but are suspicious and should be checked manually.
