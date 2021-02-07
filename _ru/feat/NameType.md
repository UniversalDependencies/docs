---
layout: feature
title: 'NameType'
shortdef: 'type of named entity'
udver: '2'
---

Classification of named entities (token-based, no nesting of entities etc.)
The feature applies mainly to the [ru-pos/PROPN]() tag;
in multi-word foreign names, [adjectives](ru-pos/ADJ) may also have this feature
(they preserve the `ADJ` tag but at the same time they would not exist in Russian
otherwise than in the named entity).

The following table lists the name types together with the most frequent examples.

<table>
<tr><td><tt>_;Y</tt></td><td>given name</td><td><em>Александр, Игорь, Петр</em></td><td>“Александр, Игорь, Петр”</td></tr>
<tr><td><tt></tt></td><td>patronymic</td><td><em>Петрович, Петровна, Иванна</em></td><td>“Петрович, Петровна, Иванна”</td></tr>
<tr><td><tt>_;S</tt></td><td>surname</td><td><em>Иванов, Петров, Кожевников</em></td><td>“Иванов, Петров, Кожевников”</td></tr>
<tr><td><tt></tt></td><td>zoonym</td><td><em>Мурка, Буренка, Бимбо</em></td><td>“Мурка, Буренка, Бимбо”</td></tr>
<tr><td><tt>_;G</tt></td><td>geographical name</td><td><em>Москва, Россия, Азия</em></td><td>“Москва, Россия, Азия”</td></tr>
<tr><td><tt>_;K</tt></td><td>company, organization, institution</td><td><em>Афиша, Просвещение, МТС</em></td><td>“Афиша, Просвещение, МТС”</td></tr>
<tr><td><tt>_;R</tt></td><td>product</td><td><em>Мерседес, Тайд</em></td><td>“Мерседес, Тайд”</td></tr>
<tr><td><tt>_;m</tt></td><td>other proper name: names of mines, stadiums, guerilla bases etc.</td><td><em>Лужники, Крокус Сити Холл</em></td><td>“Лужники, Крокус Сити Холл”</td></tr>
</table>

### <a name="Prs">`Prs`</a>: name of person

This value is used if it is not known whether it is a given or a family name, but it is known that it is a personal name.

#### Examples

* _<b>Дурилка</b>, <b>Рюриковичи</b>_

### <a name="Giv">`Giv`</a>: given name of person

Given name (not family name). Can be either the first name or, in formal speech, the second name in Russian names.

#### Examples

* _<b>Александр</b>, <b>Дмитрий</b>_

### <a name="Patrn">`Patrn`</a>: given name of person

Patronymic name (the second component of a polite personal name based on the given name of one's father).

#### Examples

* _<b>Петрович</b>, <b>Петровна</b>, <b>Иванна</b>_

### <a name="Sur">`Sur`</a>: surname / family name of person

Family name (surname). This is usually the last name in European and American names. In Chinese names, the first syllable (of three) is usually the surname.

#### Examples

* _<b>Иванов</b>, <b>Сидоров</b>_

### <a name="Zoo">`Zoo`</a>: animal name (zoonym) 

Names of individual pet animals, talking animals in fiction, etc.

#### Examples

* _<b>Мурка</b>, <b>Буренка</b>, <b>Бимбо</b>_

### <a name="Geo">`Geo`</a>: geographical name

Names of cities, countries, rivers, mountains etc. In Russian treebanks, `Geo` is also assigned to local (informal) toponyms and astronomical objects.

#### Examples

* _<b>Москва</b>&nbsp;_ “Moscow”, <b>Россия</b>&nbsp;_ “Russia”

### <a name="Com">`Com`</a>: company, organization

#### Examples

* _<b>Афиша</b>, <b>МТС</b>_

### <a name="Pro">`Pro`</a>: product

#### Examples

* _<b>Мерседес</b>, <b>Тайд</b>_

### <a name="Oth">`Oth`</a>: other

#### Examples

* _<b>Лужники</b>, <b>Евровидение</b>_

Names of stadiums, guerilla bases, events etc.
<!-- Interlanguage links updated Čt lis 12 09:43:03 CET 2020 -->
