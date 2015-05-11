---
layout: base
title:  'Czech Format Extension'
permalink: cs/overview/format.html
---

# Czech Format Extension: Miscellaneous

The final MISC field is for storing any additional information that does not fit into any of
the other fields. See also the description of the [CoNLL-U file format](../../format.html).

## Untokenized text

In accord with the universal formatting guidelines the Czech data uses the `SpaceAfter=No`
MISC feature to facilitate reconstruction of original (pre-tokenization) text.

## Lemma extensions

The lemmas in the original PDT may contain various additional information encoded as extensions
to the lemma string. These extensions have been removed so that only the bare canonical word form
remains. The information has been stored partially as features (e.g. [cs-feat/NameType]()),
and the rest should be put in the MISC column. The following MISC features exist. Each of them may
occur at most once per node.

* `LId` is a unique identifier of the dictionary entry, used with homonyms. It is the lemma itself, followed by a hyphen and a numeric identifier. Example: *jen-1*.
* `LGloss` is a comment that further explains the meaning of the lemma. It is particularly useful with homonyms. Typically it is a synonym or a longer explanation in Czech. See below for an example.
* `LDeriv` is another lemma from which this one has been derived. Only those derivations are marked that the underlying morphological lexicon considers productive.
* `LNumValue` is the numeric value of numeral words. Unlike the FEAT feature [cs-feat/NumValue](), here the exact value is given, not just a category of values.

<pre># sent_id a-cmpr9406-001-p3s1B
# orig_file_sentence cmpr9406_001#3
1  Pomocí  pomoc   NOUN  NNFS7-----A----  Case=Ins|Gender=Fem|Negative=Pos|Number=Sing                                  2  xcomp  _  _
2  může    moci    VERB  VB-S---3P-AA---  Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act  0  root   _  LGloss=(mít_možnost_[něco_dělat])
3  být     být     VERB  Vf--------A----  Negative=Pos|VerbForm=Inf                                                     1  cop    _  _
4  systém  systém  NOUN  NNIS1-----A----  Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing                    2  nsubj  _  _
5  ECM     ECM     NOUN  NNIXX-----A---8  Abbr=Yes|Animacy=Inan|Foreign=Yes|Gender=Masc|Negative=Pos                    4  nmod   _  LId=ECM-3|LGloss=(Error_Correction_Mode,_mód_u_faxů)</pre>

