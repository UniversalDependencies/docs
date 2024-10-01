---
layout: feature
title: 'Polarity'
shortdef: 'polarity'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Pos">Pos</a></td>
</tr>
</table>

Polarity indicates negation or affirmation on grammatical items.

In English, it pertains to only the following function words:

- the [particle](en-pos/PART) _not_ receives `Polarity=Neg`
- the [coordinating conjunction](en-pos/CCONJ) _nor_ receives `Polarity=Neg`, as does _neither_ when coupled with _nor_
- the [interjection](en-pos/INTJ) _no_ receives `Polarity=Neg`
- the [interjection](en-pos/INTJ) _yes_ receives `Polarity=Pos`

Lexical (as opposed to grammatical) items that trigger negative polarity,
e.g. _lack_, _doubt_, _hardly_, do not receive the feature.
Neither do negative prefixes (on adjectives: _wise &ndash; unwise, probable &ndash; improbable_),
as the availability of such prefixes depends on the lexical stem.

Other function words conveying negation are pro-forms (tagged as [DET](), [PRON](), or [ADV]())
and should therefore receive [PronType]()`=Neg` (not `Polarity`).

### <a name="Pos">`Pos`</a>: positive, affirmative

#### Examples

* [en] _<b>yes</b>_

### <a name="Neg">`Neg`</a>: negative

#### Examples

* [en] _<b>not</b>_
* [en] _<b>nor</b>_
* [en] _<b>no</b>_ as in _no, I don't think so;_ but not as in _we have no bananas_
<!-- Interlanguage links updated Ne 5. května 2024, 18:20:16 CEST -->
