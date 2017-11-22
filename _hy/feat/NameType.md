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
  <td><a href="#Oth">Oth</a></td>
  <td><a href="#Pro">Pro</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Sur">Sur</a></td>
</tr>
</table>

Classification of named entities (token-based, no nesting of entities etc.)
The feature applies mainly to the [PROPN]() tag;
in multi-word foreign names, [adjectives](ADJ) may also have this feature
(they preserve the `ADJ`).

### <a name="Geo">`Geo`</a>: geographical name

Names of cities, countries, rivers, mountains etc.

#### Examples

* _<b>Երևան</b>&nbsp;_ “Yerevan”, <b>Գերմանիա</b>&nbsp;_ “Germany”

### <a name="Prs">`Prs`</a>: name of person

This value is used if it is not known whether it is a given or a family name, but it is known that it is a personal name.

### <a name="Giv">`Giv`</a>: given name of person

Given name (not family name). This is usually the first name in European and American names. In Chinese names, the last two syllables (of three) are usually the given name.

#### Examples

* _<b>Արամ</b>, <b>Անահիտ</b>, <b>Հովհաննես</b>_

### <a name="Sur">`Sur`</a>: surname / family name of person

Family name (surname). This is usually the last name in European and American names. In Chinese names, the first syllable (of three) is usually the surname.

#### Examples

* _<b>Հովհաննիսյան</b>, <b>Պետրոսյան</b>, <b>Սարգսյան</b>_

### <a name="Com">`Com`</a>: company, organization

### <a name="Pro">`Pro`</a>: product

### <a name="Oth">`Oth`</a>: other

Names of stadiums, guerilla bases, events etc.
