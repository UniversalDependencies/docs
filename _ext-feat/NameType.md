---
layout: feature
title: 'NameType'
shortdef: 'type of named entity'
---

Classification of named entities (token-based, no nesting of entities etc.)
The feature applies mainly to the [cs-pos/PROPN]() tag;
in multi-word foreign names, [adjectives](cs-pos/ADJ) may also have this feature
(they preserve the `ADJ` tag but at the same time they would not exist in Czech
otherwise than in the named entity).

### `Geo`: geographical name

Names of cities, countries, rivers, mountains etc.

#### Examples

* _<b>Praha</b>&nbsp;_ “Prague”, _<b>Kostelec</b> nad Černými lesy&nbsp;_, _<b>Německo</b>&nbsp;_ “Germany”

### `Prs`: name of person

This value is used if it is not known whether it is a given or a family name, but it is known that it is a personal name.

### `Giv`: given name of person

Given name (not family name). This is usually the first name in European and American names. In Chinese names, the last two syllables (of three) are usually the given name.

### `Sur`: surname / family name of person

Family name (surname). This is usually the last name in European and American names. In Chinese names, the first syllable (of three) is usually the surname.

### `Nat`: nationality

Name denoting a member of a particular nation, or inhabitant of a particular territory.

#### Examples

* _<b>Čech</b>&nbsp;_ “Czech”, _<b>Němec</b>&nbsp;_ “German”, _<b>Pražan</b>&nbsp;_ “Praguer”

### `Com`: company, organization

### `Pro`: product

### `Oth`: other

Names of stadiums, guerilla bases, events etc.
