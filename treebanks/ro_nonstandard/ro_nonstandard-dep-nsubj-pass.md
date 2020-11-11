---
layout: base
title:  'Statistics of nsubj:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-nsubj.html">nsubj</a></tt>.

821 nodes (0%) are attached to their parents as `nsubj:pass`.

599 instances of `nsubj:pass` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.94762484774665.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (369; 45% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (353; 43% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (54; 7% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (19; 2% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (12; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj:pass	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	10	cc	_	ref=MATT20.22
2	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	ref=MATT20.22
3	botezul	botez	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	10	obl	_	ref=MATT20.22
4	carele	care	PRON	Pw3msry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Int,Rel	8	obl	_	ref=MATT20.22
5	Eu	eu	PRON	Pp1-sr	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj:pass	_	ref=MATT20.22
6	Mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	8	expl:pass	_	ref=MATT20.22
7	voiu	vrea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres	8	aux	_	ref=MATT20.22
8	boteza	boteza	VERB	Vmn	VerbForm=Inf	3	acl	_	ref=MATT20.22|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	3	punct	_	ref=MATT20.22
10	boteza	boteza	VERB	Vmn	VerbForm=Inf	0	root	_	ref=MATT20.22|SpaceAfter=No
11	-vă	tu	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	10	expl:pass	_	ref=MATT20.22|SpaceAfter=No
12	-veți	vrea	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	10	aux	_	ref=MATT20.22|SpaceAfter=No
13	?	?	PUNCT	QUEST	_	10	punct	_	ref=MATT20.22

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nsubj:pass	color:blue
1	Iată	iată	INTJ	I	_	2	discourse	_	ref=MATT23.38
2	lăsa	lăsa	VERB	Vmn	VerbForm=Inf	0	root	_	ref=MATT23.38|SpaceAfter=No
3	-să	sine	PRON	Px3--a--------s	Case=Acc|Person=3|PronType=Prs|Strength=Strong	2	expl:pass	_	ref=MATT23.38|SpaceAfter=No
4	-vor	vrea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	2	aux	_	ref=MATT23.38
5	casele	casă	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	2	nsubj:pass	_	ref=MATT23.38
6	voastre	tău	DET	Ds2fp-p	Gender=Fem|Number=Plur|Number[psor]=Plur|Person=2|PronType=Prs	5	det	_	ref=MATT23.38
7	pustii	pustiu	ADJ	Afpfprn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	2	xcomp	_	ref=MATT23.38|SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT23.38

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nsubj:pass	color:blue
1	Despre	despre	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	2	case	_	ref=MATT22.16.content
2	dajdea	dajdie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	nmod:pmod	_	ref=MATT22.16.content
3	împăratului	împărat	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	ref=MATT22.16.content
4	întrebat	întreba	VERB	Vmp--sm-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part	0	root	_	ref=MATT22.16.content
5	fu	fi	AUX	Vais3s	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux:pass	_	ref=MATT22.16.content
6	Hristos	Hristos	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj:pass	_	ref=MATT22.16.content|SpaceAfter=No
7	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MATT22.16.content

~~~


