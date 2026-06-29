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
An adposition can be used with different cases when used alone (for proper prepositions) or in various circumposing structures.
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
Pashto circumposing structures consist of the first (prepositional) and the second (postpositional) part:

**Prepositional part**
* proper prepositions پۀ _pë_, د _dë_, له _la_ and تر _tër_
* <!--a-->پۀ <i>pë</i> is used with the <b>local (Loc)</b> case
* <!--a-->د <i>dë</i>, له <i>la</i> and تر <i>tër</i> are used with the <b>oblique (Acc)</b> case
  * although له _la_ and تر _tër_ themselves are used with the ablative

**Postpositional part**
* improper postpositions
* some can be used also separately as adverbs (where they probably originate from)
* some can be used with more proper prepositions

**Frequent circumpositions**
* “in”: پۀ ... کې <i>pë ... ke</i>
* “on”: پۀ ... باندې <i>pë ... bấnde</i>
* “up to”: پۀ ... پورې <i>pë ... póre</i> = تر ... پورې <i>tër ... póre</i>
* “under”: تر ... لاندې <i>tër ... lấnde</i>
* “after”: تر ... ورویته <i>tër ... wrústa</i>
* “before”: تر ... مخکې <i>tër ... më́xke</i>
* “from”: له ... څخه <i>la ... cë́xa</i>
* “with”: له ... سره <i>la ... sará</i> = د ... سره <i>dë ... sará</i>
* “for”: د ... لپاره <i>dë ... lapấra</i>
* “besides”: د ... ترڅنګ <i>dë ... tërcáng</i>
* “among”: د ... ترمنځ <i>dë ... tërmánż</i>

NOTE:
* Similarly to ته _ta_, some of the improper pospositions can be used alone in multi-word tokens with directional
  pronouns را _râ_ “I, we”, در _dar_ “you” and ور _war_ “he, she, it, they”: درسره _darsará_ “with you”, ورباندې _warbấnde_ “on it”...

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
<!-- Interlanguage links updated Po 29. června 2026, 16:58:31 CEST -->
