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
(they preserve the `ADJ` tag but at the same time they would not exist in Armenian otherwise than in the named entity).

### <a name="Geo">`Geo`</a>: geographical name

Names of cities, countries, rivers, mountains etc.

#### Examples

* _<b>Երևան, ՀՀ, Եվրոպա, Գերմանիա, Վանա, Սևանա</b>&nbsp;_ “Yerevan, RA, Europe, Germany, ov Van, of Sevan”

### <a name="Prs">`Prs`</a>: name of person

This value is used if it is not known whether it is a given or a family name, but it is known that it is a personal name. We used this value for pseudonyms, nicknames, pen-names, etc. 

* _<b>Նար-Դոս, Գամառ-Քատիպա, Քաչալ</b>&nbsp;_ “Nar-Dos, Gamar-Katipa, Kachal (skinhead)”

### <a name="Giv">`Giv`</a>: given name of person

Given name (not family name). This is usually the first name.

#### Examples

* _<b>Արամ, Անահիտ, Հովհաննես</b>&nbsp;_ “Aram, Anahit, Hovhannes”

### <a name="Sur">`Sur`</a>: surname / family name of person

Family name (surname). This is usually the last name.

#### Examples

* _<b>Սարոյան, Տեր-Պետրոսյան, Գրիգորյան</b>&nbsp;_ “Saroyan, Ter-Petrosyan, Grigoryan”

### <a name="Com">`Com`</a>: company, organization, institution

#### Examples

* _<b>Սիմենս, ՄԱԿ, ԳԱԱ</b>&nbsp;_ “Siemens, UN, NAS”

### <a name="Pro">`Pro`</a>: product

#### Examples

* _<b>Երազ, ԿամԱԶ, Չայկա, Մերսեդես</b>&nbsp;_ “Yeraz, Kamaz, Chaika, Mercedes”

### <a name="Oth">`Oth`</a>: other

Names of stadiums, guerilla bases, events etc.

#### Examples

* _<b>«Հրազդան», «Դինամո», «Զվարթնոց», Զատիկ</b>&nbsp;_ “Hrazdan, Dinamo, Zvartnots, Easter”
<!-- Interlanguage links updated Út zář 29 20:23:09 CEST 2020 -->
