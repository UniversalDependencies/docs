---
layout: feature
title: 'NumForm'
shortdef: 'form of a numeral'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Digit">Digit</a></td>
  <td><a href="#Reference">Reference</a></td>
  <td><a href="#Roman">Roman</a></td>
  <td><a href="#Word">Word</a></td>
</tr>
</table>

This feature is assigned to numeric expressions with an exact value and describes how these are formally represented in the text. It usually applies to numerals labeled as [cardinals](la-feat/NumType).

Numbers expressed in a symbolic form (digits, Roman numerals...) act as "placeholders" and do not show their morphology, if any; as such, they are not marked for `Case`, `Number`, `Gender`, and similar.

In the case of non-literal numeric expressions, the lemma corresponds to the form: no "generic lemma" is used.

### <a name="Digit">`Digit`</a>: numeral expressed by digits

Digits (a form of positional numerical notation) appear either in very late Latin texts, after their widespread adoption in Europe, or in later edited versions.

#### Examples

* _**1**, **2**, **3**_

### <a name="Reference">`Reference`</a>: complex reference key

A reference e.g. to a passage in a text or similar, written by means of numbers (usually digits or Roman numerals), [punctuation](la-pos/PUNCT) marks and/or [symbols](la-pos/SYM). A reference is considered a complex token which may be marked as a ["compound"](la-feat/Compound). In future, such expressions might be split and treated as multi-word tokens.

#### Examples

* *Apoc. **21-1***, i.e. chapter 21, verse 1 of the *Book of Revelation* of the New Testament
* *Isaiae **65-17***, i.e. chapter 65, verse 17 of the *Book of Isaiah* of the Old Testament

### <a name="Roman">`Roman`</a>: numeral expressed by a Roman numeral

Additive numerical notation using letter-like symbols. Often used as cardinals, but also with other functions. Very frequent in Classical texts. Every number is treated as a single (possibly [complex](la-feat/Compound)) token.

#### Examples

* ***I*** '1', ***II*** '2', ***III*** '3'
* ***V*** '5', **X** '10', ***C*** '100', ***M*** '1000'
* ***S*** '1/2', ***F*** '40', ***Z*** '2000' (very rare forms)

### <a name="Word">`Word`</a>: numeral written in letters

A numeral written as the corresponding word; morphology possibly applies to the token. Complex numerical expressions are usually tied together by the [flat](la-dep/flat) deprel.

#### Examples

* ***unus*** 'one' (cardinal numeral; ambiguous with the homographic [indefinite](la-feat/PronType) determiner)
* ***primus*** 'first' (ordinal adjective)
* ***bini*** 'two by two' (distributive adjective)
