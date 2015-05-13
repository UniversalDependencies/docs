---
layout: base
title:  'Tokenization'
permalink: cs/overview/tokenization.html
---

# Tokenization

The low-level tokenization of the Czech UD treebank follows the tokenization of the
[Prague Dependency Treebank 3.0](http://ufal.mff.cuni.cz/pdt3.0) (PDT):

* In general, tokens are delimited by whitespace.
* Punctuation (recognized by the corresponding Unicode property) that is conventionally written adjacent to the preceding or following word is separated during tokenization.
  Some special cases worth mentioning:
  * An abbreviation marked by a period, as in *atd.* “etc.”, becomes two tokens, *<b>atd</b>* and *<b>.</b>*. The same holds for ordinal numbers *(<b>1.</b>)*
  * A compound containing a hyphen becomes three tokens (two words and the hyphen), as in *česko-slovenský* “Czech-Slovak”, *česko-německý* “Czech-German” or *německo-český* “German-Czech”.
    In these cases, the first token is a special form of adjective that never occurs independently.
    Compounds without a hyphen are not split, thus _středopravý_ “right-centrist” is one token but _středo-pravý_ would be three tokens.
    Another common case of splitting-on-hyphen is the conjunction _li_ “if”, attached to verbs as in _bude-li_ “if will be”.
  * Exception: Decimal numbers are normalized (the Czech decimal comma is converted to the English decimal point) and kept as one token, e.g. *<b>2.1</b>*.
* Most of the time, every punctuation character constitutes a token of its own. Thus *<b>...</b>* will become three tokens.

## Words and Tokens

In Czech there are fused words that correspond to multiple syntactic words.
The original PDT data use special part-of-speech tags to identify fused words,
nevertheless the fused token is not split in PDT and it corresponds to just one node in the dependency tree.
(Note: An exception was the splitting of *aby* and *kdyby* in PDT 1.0 but it was abandoned in later versions.)

In contrast, the UD format requires that certain types of fused words be split.
We say that there is a multi-word token consisting of several syntactic words, each having its own node in the tree
(see also <a href="../../u/overview/tokenization.html">universal tokenization</a>).

### Preposition + Personal Pronoun *on* in the Accusative *(něj)*

* _proň_ = _pro něj_ = “for him”
* _naň_ = _na něj_ = “on him”
* _oň_ = _o něj_ = “about him”
* _zaň_ = _za něj_ = “behind him”

Note: There are analogically fused words containing a preposition and the interrogative pronoun _co_ “what”.
In this case, the resulting token is an interrogative adverb and it is not split: _proč_ “why”, _nač, oč, zač_ “for what”.

This category covers words that would be tagged by the PDT tag `P0-------------`.
However, no such word occurs in the PDT 3.0 data.

### Preposition + Pronoun *on* in the Accusative *něj* + the Auxiliary *být* in the 2nd Person Singular *(jsi)*

* _proňs_ = _pro něj jsi_ = “for him you have”
* _naňs_ = _na něj jsi_ = “on him you have”
* _oňs_ = _o něj jsi_ = “about him you have”
* _zaňs_ = _za něj jsi_ = “behind him you have”

Note: There are analogically fused words containing a preposition, the interrogative pronoun _co_ “what” and the 2nd Person Singular auxiliary *(jsi)*.
The resulting token is a PP+auxiliary contraction: _pročs_ “why you have”, _načs, očs, začs_ “for what you have”.

For this category no PDT tag is available. However, no such word occurs in the PDT 3.0 data.

### Participle, Pronoun or Subordinating Conjunction + the Auxiliary *být* in the 2nd Person Singular *(jsi)*

* _udělals_ = _udělal jsi_ = “you have done”
* _tys_ = _ty jsi_ = “you have”
* _ses_ = _jsi se (se jsi)_ = “you have … yourself”
* _sis_ = _jsi si (si jsi)_ = “you have … yourself”
* _cos_ = _co jsi_ = “what you have”
* _tos_ = _to jsi_ = “you have … that”
* _žes_ = _že jsi_ = “that you have”

Note: This rule does not include the words _bys, abys_ and _kdybys._
They resemble the words above but _bys_ is an independent form of the auxiliary verb _být_ “to be”,
and _abys_ and _kdybys_ are in fact fused words, but they were formed using _bys,_ not _jsi._

This category does not have its own tag in PDT.
The _ses, sis_ pronouns are `P7.*` pronouns with the second person.
The _tys_ pronoun can be distinguished by having more verbal features in its tag (`PP-S1--2P-AA---`) than _ty_ (`PP-S1--2-------`).
The _žes_ conjunction is tagged `J,-S---2-------` while _že_ is tagged `J,-------------`.
The participles can be distinguished by the value of person:
normal participle _udělal_ does not inflect for person (`VpYS---XR-AA---`)
while participle fused with _jsi_, i.e. _udělals_, is tagged as being in the second person (`VpYS---2R-AA---`).
None of these occur in the PDT 3.0 data.

There can be many other forms including the 2nd Person Singular auxiliary _-s_ in addition to those listed above, e.g. _Na kohos čekal?_ “For whom did you wait?”, _Teďs to zvoral._ “You have messed that up now.”   

### Subordinating Conjunction *aby* or *kdyby*

* _abych_ = _aby bych_ = “so that I would”
* _abys_ = _aby bys_ = “so that you would”
* _aby_ = _aby by_ = “so that he/she/it/they would”
* _abychom_ = _aby bychom_ = “so that we would”
* _abyste_ = _aby byste_ = “so that you would”
* _kdybych_ = _když bych_ = “if I were”
* _kdybys_ = _když bys_ = “if you were”
* _kdyby_ = _když by_ = “if he/she/it/they were”
* _kdybychom_ = _když bychom_ = “if we were”
* _kdybyste_ = _když byste_ = “if you were”

Note: It is not clear even to a native speaker what exactly the first word should be _(aby, až, kdyby_ or _když);_
in any case, it is a conjunction.
However, it is clear that the second word is a conditional form of _být._

Heuristic to transform the tree if only surface tokens are desired as nodes:
attach the fused token (e.g. _abychom_) to the parent and with the label of the first part _(aby)_.
Tag it as subordinating conjunction and merge the features of both parts:

<pre>3-4   abychom   _      _      _                 _                                            _   _      _   _
3     aby       aby   SCONJ   J,-------------   _                                            7   mark   _   _
4     bychom    být   AUX     Vc-P---1-------   Mood=Cnd|Number=Plur|Person=1|VerbForm=Fin   7   aux    _   _</pre>

will be transformed to

<pre>3     abychom   aby   SCONJ   J,-P---1-------   Mood=Cnd|Number=Plur|Person=3|VerbForm=Fin   6   mark   _   _</pre>

### Verb + Conjunction _neboť_

* _dělámť_ = _neboť dělám_ = “because I do”
* _děláť_ = _neboť dělá_ = “because he/she/it does”
* _dělalť_ = _neboť dělal_ = “because he did”

The word forms in this group can be considered archaic.

There is only one occurrence in the PDT 3.0 data of the word _neníť_ “because it is not” (tagged `Vt-S---3P-NA--2`).
