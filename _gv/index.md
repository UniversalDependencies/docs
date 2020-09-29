---
layout: base
title:  'Manx UD'
udver: '2'
---

# UD for Manx <span class="flagspan"><img class="flag" src="../../flags/svg/IM.svg" /></span>

## Tokenization and Word Segmentation

Generally speaking, tokens in Manx are delimited by whitespace characters
and punctuation, with the following exceptions:

* We diverge from the Irish and Scottish Gaelic treebanks in 
treating so-called “inflected prepositions” as multiword tokens.
So for example, _lhiam_ “with me” (Irish _liom_, Scottish Gaelic _leam_)
is split into _lesh_ “with” and _mee_ ”me”.

* Some words containing apostrophes are treated as multiword tokens. Here are a few examples:
  * _ta'n_ = _ta_ “is” + _'n_ “the”
  * _t'eh_ = _t'_ “is” + _eh_ ”he, it”
  * _v'ee_ = _v'_ “was” + _ee_ ”she, it”
  * _shoh'n_ = _shoh_ ”this” + _'n_ “the”
  * _'sy_ = _ayns_ “in” + _yn_ “the”
  * _dt'inneen_ = _dty_ ”your (s.)” + _inneen_ ”daughter”
But the apostrophe is also used in other
cases where we choose not to split as a multiword token:
  * In some emphatic endings: _e chree's_ (“*his* heart”)
  * When used word initially, it usually indicates an _f_ dropped by lenition: _toan yn 'ockle_ “tone of the word” (cf. _fockle_ “word”)
  * In some orthographic variants: _nee'm_ “I will do” (more often _neeym_), or _bee'm_ “I will be” (more often _beem_ or _beeym_), etc.

* Hyphens are treated as internal word characters. This is the only reasonable choice in cases like _neu-shickyr_ lit. “non-certain”, or _h-awin_ (a mutated form of _awin_ “river”). In other cases, especially noun-noun compounds like _magher-etlee_ ”airfield” or _shamyr-vrastyl_ “classroom”, one could argue that we ought to split into two words at the hyphen (indeed, compounds like this in Irish are written with a space instead of a hyphen). For simplicity's sake we have not done so, since not all cases are clear cut.

* Numbers and dates can contain internal punctuation, e.g. _12,000_ or _9.7.96_.

* Some abbreviations containing periods are treated as single tokens, 
e.g. _R.U._ for _Reeriaght Unnaneyssit_ ”United Kingdom”, or
_a.r.e._ for _as reddyn elley_ “and other things, etc.”

* There are no words containing spaces.

## Morphology

### Tags

* Manx uses the full set of 17 UD part-of-speech tags.

* The AUX tag is used only for the copula _she_. All other verbs, 
including the substantive verb _bee_ “to be”, are tagged VERB.

* The PART tag is used for the following words:
  * The adverbalizer _dy_: _dy moal_ “slowly”
  * The negative verbal particles _cha_ and _nagh_
  * The comparative particle _ny_: _ny syrjey_ “higher”
  * The relativizer _dy_:

~~~ sdparse
Strooys dy row aggle orroo \n Methinks that was fear on-them
mark(row, dy)
ccomp(Strooys, row)
nsubj(row, aggle)
~~~

* Verbal nouns (_jannoo_, _cur_, etc.) are tagged NOUN and verbal
adjectives (e.g. _ruggit_ “born”) are tagged ADJ,
following the Irish and Scottish Gaelic treebanks.

* demonstrative pronouns are tagged as PRON,
e.g. _<b>shen</b> va'n vea aym_ “that was my life”.
* demonstrative determiners are tagged as DET,
e.g. _yn lioar <b>shen</b>_ “that book”.

### Features

The initial version of the Cadhan Aonair Manx treebank does not specify any
morphological features, although we hope to add these
to a future version.

## Syntax

The basic word order of Manx is VSO, like the other Celtic languages:

~~~ sdparse
Ren my ven yn soo shen jea \n Made my wife the jam this yesterday
det(ven, my)
nsubj(Ren, ven)
det(soo, yn)
obj(Ren, soo)
det(soo, shen)
advmod(Ren, jea)
~~~

The copula _she_ is annotated as follows:

~~~ sdparse
She yn Vritaan y lieh-innys smoo 'sy Rank \n It-is the Brittany the peninsula biggest in-the France
cop(Vritaan, She)
det(Vritaan, yn)
det(lieh-innys, y)
nsubj(Vritaan, lieh-innys)
amod(lieh-innys, smoo)
case(Rank, 'sy)
nmod(lieh-innys, Rank)
~~~

Verbal nouns play an important role in Manx grammar, and they are
annotated following the guidelines for Irish and Scottish Gaelic.
As noted above, they are always given the POS tag `NOUN`
and very often labeled as `xcomp` of some higher verb:

~~~ sdparse
T' ad faagail bee ec oaieyn ny merriu \n are they leaving food at graves the dead
nsubj(T', ad)
xcomp(T', faagail)
obj(faagail, bee)
case(oaieyn, ec)
obl(faagail, oaieyn)
det(merriu, ny)
nmod(oaieyn, merriu)
~~~

Note that the object follows the verbal noun in the case above;
in other constructions it precedes the verbal noun:

~~~ sdparse
Nee eh yn thie y lhieggal \n Will-do he the house to knock-down
nsubj(Nee, eh)
det(thie, yn)
obj(lhieggal, thie)
mark(lhieggal, y)
xcomp(Nee, lhieggal)
~~~

The substantive verb _bee_ “to be” (Irish _bí_, Scottish Gaelic _bi_)
can have predicate complements in the form of adverbial, adjectival,
or prepositional phrases; these are distinct from copular
constructions in Manx. Following the Irish model, 
we label these complements with the extended tag `xcomp:pred`:

~~~ sdparse
Ta 'n lioar ass clou \n is the book out-of print
det(lioar, 'n)
nsubj(Ta, lioar)
case(clou, ass)
xcomp:pred(Ta, clou)
~~~

The Manx treebank uses 31 of the 37 
dependency relations in v2 of the UD guidelines
(all but `expl`, `dislocated`, `aux`, `clf`, `list`, and `goeswith`).
In addition, there are six subtype relations represented as well;
all but `flat:foreign` are used in the Irish treebank.

* `acl:relcl` for relative clauses
* `csubj:cleft` for cleft subjects
* `csubj:cop` for copular clausal subjects
* `flat:foreign` for non-first words in quoted foreign phrases
* `obl:tmod` for temporal modifiers
* `xcomp:pred` for predicates of the substantive verb “to be”

## Treebanks

There is one Manx UD treebank:

  * [Manx-Cadhan](../treebanks/gv_cadhan/index.html)
