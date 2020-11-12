---
layout: feature
title: 'NameType'
shortdef: 'type of named entity'
---

Classification of named entities (token-based, no nesting of entities etc.)
The feature applies mainly to the [ru-pos/PROPN]() tag;
in multi-word foreign names, [adjectives](ru-pos/ADJ) may also have this feature
(they preserve the `ADJ` tag but at the same time they would not exist in Russian
otherwise than in the named entity).

The following table lists the name types together with the most frequent examples.

<table>
<tr><td><tt>_;Y</tt></td><td>given name</td><td><em>Александр, Игорь, Петр</em></td><td>“Александр, Игорь, Петр”</td></tr>
<tr><td><tt>_;S</tt></td><td>surname</td><td><em>Иванов, Петров, Кожевников</em></td><td>“Иванов, Петров, Кожевников”</td></tr>
<tr><td><tt>_;G</tt></td><td>geographical name</td><td><em>Москва, Россия, Азия</em></td><td>“Москва, Россия, Азия”</td></tr>
<tr><td><tt>_;K</tt></td><td>company, organization, institution</td><td><em>Афиша, Просвещение, МТС</em></td><td>“Афиша, Просвещение, МТС”</td></tr>
<tr><td><tt>_;R</tt></td><td>product</td><td><em>Мерседес, Тайд</em></td><td>“Мерседес, Тайд”</td></tr>
<tr><td><tt>_;m</tt></td><td>other proper name: names of mines, stadiums, guerilla bases etc.</td><td><em>Лужники, Крокус Сити Холл</em></td><td>“Лужники, Крокус Сити Холл”</td></tr>
</table>

### `Geo`: geographical name

Names of cities, countries, rivers, mountains etc.

#### Examples

* _<b>Москва</b>&nbsp;_ “Moscow”, <b>Россия</b>&nbsp;_ “Russia”

### `Prs`: name of person

This value is used if it is not known whether it is a given or a family name, but it is known that it is a personal name.

### `Giv`: given name of person

Given name (not family name). This is usually the first name in European and American names. In Chinese names, the last two syllables (of three) are usually the given name.

#### Examples

* _<b>Александр</b>, <b>Дмитрий</b>_

### `Sur`: surname / family name of person

Family name (surname). This is usually the last name in European and American names. In Chinese names, the first syllable (of three) is usually the surname.

#### Examples

* _<b>Иванов</b>, <b>Сидоров</b>_

### `Com`: company, organization

### `Pro`: product

### `Oth`: other

Names of stadiums, guerilla bases, events etc.
<!-- Interlanguage links updated Čt lis 12 09:43:03 CET 2020 -->
