---
layout: feature
title: 'NameType'
shortdef: 'type of named entity'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Com">Com</a></td>
  <td><a href="#Geo">Geo</a></td>
  <td><a href="#Giv">Giv</a></td>
  <td><a href="#Nat">Nat</a></td>
  <td><a href="#Oth">Oth</a></td>
  <td><a href="#Pat">Pat</a></td>
  <td><a href="#Pro">Pro</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Sur">Sur</a></td>
</tr>
</table>

Classification of named entities (token-based, no nesting of entities etc.)
The feature applies mainly to the [PROPN]() tag;
in multi-word foreign names, [adjectives](cs-pos/ADJ) may also have this feature
(they preserve the `ADJ` tag but at the same time they would not exist in the
host language otherwise than in the named entity).

### <a name="Geo">`Geo`</a>: geographical name

Names of cities, countries, rivers, mountains etc.

#### Examples

* [cs] _<b>Praha</b>&nbsp;_ “Prague”, _<b>Kostelec</b> nad Černými lesy&nbsp;_, _<b>Německo</b>&nbsp;_ “Germany”

### <a name="Prs">`Prs`</a>: name of person

This value is used if it is not known whether it is a given or a family name, but it is known that it is a personal name.

#### Examples

* [sms] _Ja seeʹst vueʹppes leäi <b>Laurikainen</b>_ "And they had a guide Laurikainen"

### <a name="Giv">`Giv`</a>: given name of person

Given name (not family name). This is usually the first name in European and American names. In Chinese names, the last two syllables (of three) are usually the given name.

#### Examples

* [en] _<b>George</b> Bush_

### <a name="Pat">`Pat`</a>: patronymic in a name of a person

Patronymic (not given name and not family name). This is the middle name in East Slavic personal names.

#### Examples

* [uk] _директора Бульби Олександра <b>Миколайовича</b>_ / _dyrektora Buľby Oleksandra <b>Mykolajovyča</b>_

### <a name="Sur">`Sur`</a>: surname / family name of person

Family name (surname). This is usually the last name in European and American names. In Chinese names, the first syllable (of three) is usually the surname.

#### Examples

* [en] _George <b>Bush</b>_

### <a name="Nat">`Nat`</a>: nationality

Name denoting a member of a particular nation, or inhabitant of a particular territory.

#### Examples

* [cs] _<b>Čech</b>&nbsp;_ “Czech”, _<b>Němec</b>&nbsp;_ “German”, _<b>Pražan</b>&nbsp;_ “Praguer”
* [cs] _Po válce byli <b>Němci</b> z Československa vyhnáni._ "After the war, the Germans were expelled from Czechoslovakia."

### <a name="Com">`Com`</a>: company, organization

#### Examples

* [en] _<b>Microsoft, UNESCO</b>_

### <a name="Pro">`Pro`</a>: product

#### Examples

* [en] _Opel <b>Vectra</b>_

### <a name="Oth">`Oth`</a>: other

Names of stadiums, guerilla bases, events etc.

#### Examples

* [en] _the <b>COLING</b> 2020 conference_

<!-- Interlanguage links updated Čt lis 12 09:43:03 CET 2020 -->
