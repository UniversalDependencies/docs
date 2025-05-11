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

See [Repository and files](/contributing/repository_files.html).



# Validation

See [Validation](/contributing/validation.html).



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
