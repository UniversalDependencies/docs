---
layout: base
title:  'Statistics of flat:name in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="sl_sst-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="sl_sst-dep-flat-foreign.html">flat:foreign</a></tt>.

125 nodes (0%) are attached to their parents as `flat:name`.

125 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.064.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> (124; 99% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	[name:personal]	[name:personal]	PROPN	X	_	0	root	_	pronunciation=[name:personal]
2	[name:surname]	[name:surname]	PROPN	X	_	1	flat:name	_	pronunciation=[name:surname]

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	gospod	gospod	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	4	vocative	_	pronunciation=gospod
2	[name:surname]	[name:surname]	PROPN	X	_	1	flat:name	_	pronunciation=[name:surname]
3	eee	eee	INTJ	I	_	4	discourse:filler	_	pronunciation=eee
4	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	0	root	_	pronunciation=kaj
5	torej	torej	ADV	Rgp	Degree=Pos	4	advmod	_	pronunciation=torej
6	če	če	SCONJ	Cs	_	8	mark	_	pronunciation=če
7	ne	ne	PART	Q	Polarity=Neg	8	advmod	_	pronunciation=ne
8	pride	priti	VERB	Vmer3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	pronunciation=pride
9	do	do	ADP	Sg	Case=Gen	11	case	_	pronunciation=do
10	eee	eee	INTJ	I	_	11	discourse:filler	_	pronunciation=eee
11	sprejetja	sprejetje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	8	obl	_	pronunciation=sprejetja
12	tega	ta	DET	Pd-msg	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	13	det	_	pronunciation=tega
13	sklepa	sklep	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	11	nmod	_	pronunciation=sklepa

~~~


