---
layout: base
title:  'Online validation configuration'
udver:  '2'
---

# Online validation configuration

An important part of the UD infrastructure is the automatic online data validation system. It runs on
a virtual machine currently hosted at Charles University, maintained by Dan Zeman. It is accessible through
the following links:

* [Validation report](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/validation-report.pl)
* Registration of language-specific validation data
  * [Auxiliaries and copulas](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_auxiliary.pl)
  * [Feature-value-UPOS combinations](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_feature.pl)
  * [Basic dependency relations](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_deprel.pl)
  * [Enhanced dependency relations](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_edeprel.pl)
  * [Tokens with space](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/langspec/specify_token_with_space.pl)

On the virtual machine `udvalidator` (accessible through `quest.ms.mff.cuni.cz`), the relevant files and folders
reside in `/usr/lib/cgi-bin/unidep`. This folder has hundreds of subfolders, most of them are clones of UD repositories
from GitHub: All treebank repositories as well as `tools`, `docs`, and `docs-automation`. Special attention must be
paid to the access rights of the folders, including their `.git` subfolders. When doing manual work, I access the server
under my own user name, but all automation occurs under the user `www-data`. Therefore, that user must have full access
to the subfolders to be able to pull new versions from GitHub and to save other data. I use access control lists to
achieve that (the commands `setfacl` and `getfacl`).

There is also a clone of [udapi-python](https://github.com/udapi/udapi-python) (alternatively, Udapi could be installed
from pip, but it is not updated as frequently there) and a Python virtual environment with packages needed to run Udapi
and the validator (`regex`, `colorama`, `termcolor`).

A webhook is set up in the GitHub UniversalDependencies organization to ensure the virtual server is contacted every
time someone pushes changes to any UD GitHub repository. Organization owners can edit the webhook
[here](https://github.com/organizations/UniversalDependencies/settings/hooks). The `githook.pl` script on the server
is responsible for processing the hook, which typically involves two steps:

1. Pull the new contents of the affected repository from GitHub.
2. Decide whether the changes call for revalidation of one or more treebanks. If so, run the validator and update the validation report.

However, the hook will not take care of adding a newly created treebank to the virtual server (I did not give user
`www-data` write access to the main folder). Therefore, new treebanks must be cloned manually on the validation server.

Similarly, if `githook.pl` or the other scripts called by it change, we must go to the server and activate them.
The scripts are kept in the `docs-automation` repository, which is updated automatically via webhook, but `githook.pl`
does not call them from there. Instead, it calls a copy in the main folder. More precisely, it is not a copy but
a hardlink; nevertheless, after `git pull` the main folder copy gets disconnected from the copy in `docs-automation`
and must be reconnected by running `docs-automation/valdan/lnquest.sh`. (Note: I do not remember why I opted for
hardlinks but I suspect the reason may have been that the scripts should think they live in the folder above all the
UD folders and they can access the UD folders via relative paths.)

On the other hand, the CGI scripts responsible for registration of language-specific validation data do not need this.
They are accessed through a symlink (`langspec -> docs-automation/valrules/`) and they are available immediately after
the automatic `git pull`.

After a successful edit and save of data in one of the forms provided by those scripts, the changes are pushed both to
`docs-automation` and to `tools` (while the source JSON files are always read from `docs-automation`, which is only
writable by a narrow group of users). This way we survive cases where people overlook or ignore the guidelines and
edit the JSON files in `tools` (which is currently writable by all members of the Contributors team).

## Unsorted

```
python3 -m venv /usr/lib/cgi-bin/unidep/.venv
source .venv/bin/activate
```

More details in [valdan/README](https://github.com/UniversalDependencies/docs-automation/blob/master/valdan/README.txt)
and [valdan/README-system-update](https://github.com/UniversalDependencies/docs-automation/blob/master/valdan/README-system-update.txt).

Do virtuálního prostředí instalovat regex (potřebujeme přímo ve validátoru), colorama a termcolor (tyhle dva potřebuje Udapi).
Případně lze pipem nainstalovat i udapi, ale já mám raději vybalenou kopii repozitáře udapi-python z GitHubu a nastavenou proměnnou
prostředí $PYTHONPATH, která na tuto kopii navede python.
