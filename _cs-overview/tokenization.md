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

Rozdělování je v tomto případě výhodné kvůli statistickým modelům, ale není nezbytné pro zachycení syntaxe.
V PDT se to tak nicméně tradičně dělá. Je vhodné na to upozornit, protože tím dostáváme jinak neexistující
tvar přídavného jména "česko-", "německo-" atd., který potřebuje svou vlastní morfologickou značku.
Složeniny bez spojovníku ("středopravý") se nerozdělují.

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

### Verb + Conjunction _neboť_

* _dělámť_ = _neboť dělám_ = “because I do”
* _děláť_ = _neboť dělá_ = “because he/she/it does”
* _dělalť_ = _neboť dělal_ = “because he did”

The word forms in this group can be considered archaic.
