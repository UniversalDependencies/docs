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

<pre># sent_id a-cmpr9406-001-p2s1
# orig_file_sentence cmpr9406_001#1
1   Třikrát     třikrát  ADV    Cv-------------  NumType=Mult                                              2  advmod  _  LNumValue=3
2   rychlejší   rychlý   ADJ    AAFS1----2A----  Case=Nom|Degree=Comp|Gender=Fem|Negative=Pos|Number=Sing  0  root    _  _
3   než         než      SCONJ  J,-------------  _                                                         4  mark    _  LId=než-2
4   slovo       slovo    NOUN   NNNS1-----A----  Case=Nom|Gender=Neut|Negative=Pos|Number=Sing             2  advcl   _  _

# sent_id a-cmpr9406-001-p3s1B
# orig_file_sentence cmpr9406_001#3
1  Pomocí  pomoc   NOUN  NNFS7-----A----  Case=Ins|Gender=Fem|Negative=Pos|Number=Sing                                  2  xcomp  _  _
2  může    moci    VERB  VB-S---3P-AA---  Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act  0  root   _  LGloss=(mít_možnost_[něco_dělat])
3  být     být     VERB  Vf--------A----  Negative=Pos|VerbForm=Inf                                                     1  cop    _  _
4  systém  systém  NOUN  NNIS1-----A----  Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing                    2  nsubj  _  _
5  ECM     ECM     NOUN  NNIXX-----A---8  Abbr=Yes|Animacy=Inan|Foreign=Yes|Gender=Masc|Negative=Pos                    4  nmod   _  LId=ECM-3|LGloss=(Error_Correction_Mode,_mód_u_faxů)

# sent_id a-cmpr9406-001-p6s5
# orig_file_sentence cmpr9406_001#16
1   Pokud       pokud       SCONJ  J,-------------  _       3       mark    _       _
2   test        test        NOUN   NNIS1-----A----  Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing      3       nsubj   _  _
3   neproběhne  proběhnout  VERB   VB-S---3P-NA---  Aspect=Perf|Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act        6       advcl   _       _
4   bezchybně   bezchybně   ADV    Dg-------1A----  Degree=Pos|Negative=Pos 3       advmod  _       SpaceAfter=No|LDeriv=bezchybný
5   ,           ,           PUNCT  Z:-------------  _       3       punct   _       _
6   snižují     snižovat    VERB   VB-P---3P-AA---  Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 0       root    _       _
7   rychlost    rychlost    NOUN   NNFS4-----A----  Case=Acc|Gender=Fem|Negative=Pos|Number=Sing    6       dobj    _  LDeriv=rychlý
8   přenosu     přenos      NOUN   NNIS2-----A----  Animacy=Inan|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing      7       nmod    _  _
9   tak         tak         ADV    Db-------------  _       10      advmod  _       LId=tak-3
10  dlouho      dlouho      ADV    Dg-------1A----  Degree=Pos|Negative=Pos 6       advmod  _       SpaceAfter=No|LGloss=(o_čase;_př._dlouhá_doba)
11  ,           ,           PUNCT  Z:-------------  _       14      punct   _       _
12  až          až          SCONJ  J,-------------  _       14      mark    _       LId=až-2|LGloss=(přijde,_až_to_dodělá)
13  test        test        NOUN   NNIS1-----A----  Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing      14      nsubj   _  _
14  proběhne    proběhnout  VERB   VB-S---3P-AA---  Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act        10      advcl   _       _
15  správně     správně     ADV    Dg-------1A----  Degree=Pos|Negative=Pos 14      advmod  _       SpaceAfter=No|LGloss=(podle_něj._měřítek;_př._chlap,_míra,...)|LDeriv=správný
16  .           .           PUNCT  Z:-------------  _       6       punct   _       _</pre>
