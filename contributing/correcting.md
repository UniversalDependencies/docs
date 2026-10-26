---
layout: base
title:  'Correcting errors in treebanks'
udver: '2'
---

# Correcting Errors in Treebanks

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
