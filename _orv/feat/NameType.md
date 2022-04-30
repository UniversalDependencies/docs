---
layout: feature
title: 'NameType'
shortdef: 'type of named entity'
udver: '2'
---

Classification of named entities (token-based, no nesting of entities etc.)
The feature applies mainly to the [orv-pos/PROPN]() tag;
in multi-word foreign names, [adjectives](orv-pos/ADJ) may also have this feature
(they preserve the `ADJ` tag but at the same time they would not exist in Russian
otherwise than in the named entity).

### <a name="Geo">`Geo`</a>: geographical name

Names of cities, countries, rivers, mountains etc.

#### Examples

* [orv] _<b>Псковъ</b>&nbsp;_ “Pskov”, _<b>Нева</b>_ “Neva”, _<b>Ѡрда</b>&nbsp;_ “(Golden) Horde”

### <a name="Prs">`Prs`</a>: name of person

This value is used if it is not known whether it is a given or a family name, but it is known that it is a personal name.

#### Examples

* [orv] _<b>Кабанъ</b>_ 

### <a name="Giv">`Giv`</a>: given name of person

Given name (not family name). This is usually the first name in European and American names. In Chinese names, the last two syllables (of three) are usually the given name.

#### Examples

* [orv] _<b>Климѧта</b>_, _<b>Софиꙗ</b>_ 

### <a name="Pat">`Pat`</a>: patronymic in a name of a person

Patronymic (not given name and not family name). This is the middle name in East Slavic personal names.

#### Examples

* [orv] _<b>Григоричь</b>_, _<b>Пѣсковна</b>_

### <a name="Hus">`Hus`</a>: husband's name in a name of a person

Husband's name (not given name and not family name). This is the middle name in East Slavic personal names.

#### Examples

* [orv] _<b>Гюрьгеваꙗ</b>_ “Jury's wife”, _<b>Таишинаꙗ</b>_ “Taisha's wife”

### <a name="Sur">`Sur`</a>: surname / family name of person

Family name (surname). This is usually the last name in European and American names. In Chinese names, the first syllable (of three) is usually the surname.

#### Examples

* [orv] _<b>Коробьинъ</b>_, _<b>Коробьина</b>_

### <a name="Nat">`Nat`</a>: nationality

Name denoting a member of a particular nation, or inhabitant of a particular territory.

#### Examples

* [orv] _<b>чехи</b>_ “Czech”, _<b>чюдь</b>_ “Chud”  

### <a name="Com">`Com`</a>: company, organization

#### Examples

* [orv] _<b>РИБ</b>_

### <a name="Pro">`Pro`</a>: product

#### Examples

* [orv] _<b>Апостолъ</b>_

### <a name="Oth">`Oth`</a>: other

Names of events etc.

#### Examples

* [orv] _<b>Пасха</b>_  

### <a name="Zoo">`Zoo`</a>: animal name (zoonym) 

Names of individual pet animals, talking animals in fiction, etc.

#### Examples

* _<b>Мурка</b>_  

