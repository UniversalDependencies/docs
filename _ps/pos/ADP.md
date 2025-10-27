---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition

Adpositions are functional words used with nominals forming a single structure
and allowing them to enter into various syntactic relations within the clause, mostly [obl]() or [nmod]().
The relation of the adposition to the nominal is always [case]().

Pashto has various types of adpositions.
There are a few proper adpositions (mostly prepositions),
which can further build circumpositions with improper postpositions.

Pashto adpositions require the nominal to be in a certain morphonological case.
The [Case]() feature is then tagged also for the adposition itself.
An adposition can be used with different case when used alone (for proper prepositions) in various circumposing structures.
Cases associated with Pashto adpositions are local (`Loc`), oblique (`Acc`) and ablative (`Abl`).

### Proper adpositions
<table class="typeindex" border="1">
<tr>
  <td align="middle"><b>Local (Loc)</b></td>
  <td align="middle"><b>Oblique (Acc)</b></td>
  <td align="middle"><b>Ablative (Abl)</b></td>
</tr>
<tr>
  <td align="middle">پۀ <i>pë</i> “at, in, by, on...”<br/>پر <i>për</i> “on”</td>
  <td align="middle">د <i>dë</i> “of”<br/>ته <i>ta</i> “to, for”</td>
  <td align="middle">له <i>la</i> “from”<br/>تر <i>tër</i> “up to”<br/>بې <i>be</i> “without”</td>
</tr>
</table>

NOTES:
* The adposition ته _ta_ is the only postposition, all other proper adpositions are prepositions.
* The postposition ته _ta_ can be used in multi-word tokens with directional
  pronouns را _râ_ “I, we”, در _dar_ “you” and ور _war_ “he, she, it, they”: راته _rấta_, درته _dárta_ and ورته _wárta_.
* The prepositions پر _për_ and تر _tër_ used with the 3rd person weak pronoun یې _ye_ “he, she, it, they”
  are merged into a multi-word tokens پرې _pre_ and ترې _tre_.
* The combination of prepositions بې له _be la_ “without” is also used.

### Circumpositions
Out of the proper adpositions, only the prepositions پۀ _pë_, د _dë_, له _la_ and تر _tër_
enter into the circumposing structures as their first element.
The preposition پۀ _pë_ forms circumpositions requiring the **local (Loc)** case,
the other three form circumpositions with the **oblique (Acc)** case
(although له _la_ and تر _tër_ themselves are used with the ablative).
The second part of the circumposing structures are improper postpositions.
Some of them can be used also separately as adverbs (where they probably originate from).
Most of the improper postpositions can be used with more proper prepositions.

In the following table, the preposition is on the let, the postposition on the top
and the meaning of the whole circumposition, if it exists, is in the corresponding table cell.
The table lists the most frequent Pashto circumpositions.
There can be more improper postpositions that are not listed here.
An empty cell does not necessarily mean that the combination cannot be used.
<table class="typeindex" border="1">
<tr>
  <td align="middle"></td>
  <td align="middle"><b>کې <i>ke</i></b></td>
  <td align="middle"><b>باندې <i>bấnde</i></b></td>
  <td align="middle"><b>لاندې <i>lấnde</i></b></td>
  <td align="middle"><b>پورې <i>póre</i></b></td>
  <td align="middle"><b>سره <i>sará</i></b></td>
  <td align="middle"><b>څخه <i>cë́xa</i></b></td>
  <td align="middle"><b>ورویته <i>wrústa</i></b></td>
</tr>
<tr>
  <td align="middle"><b>پۀ <i>pë</i></b> + Loc</td>
  <td align="middle">in</b></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
</tr>
<tr>
  <td align="middle"><b>د <i>dë</i></b> + Acc</td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
</tr>
<tr>
  <td align="middle"><b>له <i>la</i></b> + Acc</td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
</tr>
<tr>
  <td align="middle"><b>تر <i>tër</i></b> + Acc</td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
  <td align="middle"></td>
</tr>
</table>

<!--
Some prepositions take the form of fixed multiword expressions, e.g.
_na rozdíl od&nbsp;_ “in contrast to”, _v&nbsp;souvislosti s&nbsp;_
“in connection with”. The
component words are then still tagged according to their basic use
(_na&nbsp;_ is `ADP`, _rozdíl&nbsp;_ is [NOUN](), etc.) and their status as
multiword expressions are accounted for in the syntactic annotation.
-->

### Examples

-ㅤپۀ کور کې _pë kor ke_ “in the house” / “at home”
