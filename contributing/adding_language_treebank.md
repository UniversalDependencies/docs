---
layout: base
title: 'Adding new language or treebank'
udver: '2'
---

# Adding New Language or Treebank to UD

These are the steps you need to follow if you want to write UD guidelines and/or provide annotated data
for a language that is currently not listed on the UD website, or a new treebank of a language that is
already listed. More details follow below the summary.

* Make sure you have a [GitHub account](https://github.com/).
* Contact a member of our release task force and ask them to add you to the Contributors team, which will give you write access.
  They will need your GitHub user name, your real name, and your e-mail address.
  * Also tell the task force the preferred name for your treebank repository (see below).
  * If the treebank is maintained by multiple people, you can ask for multiple users to be granted write access.
* Subscribe to the [UD mailing list](https://lists.uu.se/sympa/info/lingfil-ud).
  Important announcements for the data providers are circulated through this list.
* If your language does not yet have language-specific documentation, [write it](/contributing/language_specific.html).
  Without meeting minimal documentation requirements, treebanks of that language cannot be released.
* When you get your repository, upload the data to the `dev` branch.
  Check the [online validation report](https://quest.ms.mff.cuni.cz/udvalidator/cgi-bin/unidep/validation-report.pl),
  fix any errors reported there and check it again until your treebank is reported as valid. Invalid treebanks cannot be released.
* Make sure to read the other [guidelines and requirements for your repository](/contributing/index.html#contributing-data).
* Look forward to the official [release](#releases) :-)

The current contact for the release task force is:
Dan Zeman (zeman@ufal.mff.cuni.cz).

UD treebank repositories have names that follow a uniform scheme. They start with “UD_” followed by the
language name, a hyphen and a short treebank identifier (normally 2 to 6 letters, although some are longer).
For example, UD_English-LinES and UD_English-ParTUT are two different English UD treebanks and their
identifiers are LinES and ParTUT. The identifier can be an acronym of your annotation project (such as XTB,
where X is the initial of the language name), or your institution, or even your own initials, but preferably
it should be short. It can contain uppercase and lowercase English letters (the first letter uppercase) but
it cannot contain additional underscores, hyphens or other special characters. Tell your preferred treebank
acronym to the release task force when you ask for the repository.

Think carefully whether the acronym is good enough even considering possible future growth of the treebank.
**Once the repository has been created, renaming is strongly discouraged** (although not entirely impossible
if there are good reasons for it; but it is painful for the maintenance crew because many places in the
infrastructure have to be carefully checked manually).

Even more important it is that the name of the language be stable. For some languages, there may be
multiple candidates for their name. It deserves some thought before the first treebank repository of
the language is created, so that other people contributing to the language are hopefully happy with it
and no renaming is needed.
We stick with the ISO 639 language codes. If a language does not have its own code, it will be treated
as a variant of its closest relative, and they will share the language prefix of the repository name
(it is then possible to use the name of the variant as the treebank identifier).
Try to imagine how likely it is that somebody will want to cover another variant in the future, and
whether or not they will like the language name you propose now. In any case, we only use English
letters in the repository name (which should bear the _English_ name of the language). Various
special characters, diacritics or apostrophes may be linguistically more appropriate but you have to
save them for the documentation, and avoid them in the repository name.

The treebank name also indirectly affects the prescribed names of the data files inside the repository.
The files will contain the registered ISO code of the language (instead of the language name), and the
treebank identifier, lowercased. For example, the file with the test data of UD_English-LinES is named
`en_lines-ud-test.conllu`. This name is required by the infrastructure and the treebank will not be
released if the naming convention is not followed.

## Releases

Usually we have [two releases every year](/download.html), one in May and one in November. The deadline
for your treebank to be valid is May/November 1st, the actual release occurs on the 15th. The period between
the 1st and the 15th is known as **data freeze period.** During this time, the release task force prepares
the release, while you must not push any changes neither to the `dev` branch of your treebank repository, nor
to the documentation. The exception is if you are explicitly asked by the release task force to fix something,
or, alternatively, you realize that you would like to fix something, in which case you first ask the
release task force for permission, and only after you get it you modify the data on GitHub. Otherwise
your actions could disrupt the release building process. You are more likely to obtain the permission
towards the beginning of the data freeze, when the real work has not yet started. Later on, the release
task force will not want to restart their work except for the most severe kinds of errors. We have hundreds
of treebanks and we need to keep the process streamlined; we cannot return to individual treebanks and
re-process them manually.

If your treebank is [valid](/contributing/validation.html) by the deadline for the given release, it will be
included in the release package published and archived on [Lindat](https://lindat.mff.cuni.cz/repository/xmlui/),
the corresponding commit on GitHub will be tagged with the release number and merged into the `master` branch.
Without this, your treebank is not officially part of Universal Dependencies and you should not publish papers
claiming that it has been released in UD. Mere uploading your data to the `dev` branch is not sufficient.
