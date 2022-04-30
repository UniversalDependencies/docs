---
layout: base
title:  'Statistics of acl in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `acl`

This relation is universal.

37 nodes (2%) are attached to their parents as `acl`.

37 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.45945945945946.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (26; 70% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (4; 11% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 15 acl	color:blue
1	Sü	seen	VERB	_	Mood=Imp|Number=Sing|Person=2	0	root	_	lemma[gml]=sên|SpaceAfter=No
2	,	,	PUNCT	_	_	8	punct	_	_
3	dat	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	8	nsubj	_	lemma[gml]=dat²
4	is	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	cop	_	lemma[gml]=wēsen²
5	al	al	ADV	_	_	8	advmod	_	lemma[gml]=al
6	dat	dat	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	lemma[gml]=dat²
7	drüdde	drüdde	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	lemma[gml]=drüdde
8	mål	mål	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	1	parataxis	_	lemma[gml]=mâl¹|SpaceAfter=No
9	,	,	PUNCT	_	_	15	punct	_	_
10	dat	dat	SCONJ	_	_	15	mark	_	lemma[gml]=dat²
11	see	see	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	lemma[gml]=sê¹
12	den	de	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	lemma[gml]=dê¹
13	vadem	vadem	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	15	obj	_	lemma[gml]=vādem
14	loupen	loupen	VERB	_	VerbForm=Inf	15	xcomp	_	lemma[gml]=lôpen¹
15	löt	låten	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	acl	_	lemma[gml]=lâten¹|SpaceAfter=No
16	!	!	PUNCT	_	_	1	punct	_	SpaceAfter=No
17	’	’	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 acl	color:blue
1	As	as	SCONJ	_	_	6	mark	_	lemma[gml]=alsô
2	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	lemma[gml]=ik
3	ter	dår	ADV	_	_	6	advmod	_	lemma[gml]=dâr¹
4	mer	men	ADV	_	_	6	advmod	_	lemma[gml]=men³
5	eyne	eyn	PRON	_	Case=Acc|Gender=Fem,Masc|Number=Sing|PronType=Ind	6	obj	_	lemma[gml]=êⁱn¹
6	wüs	weaten	VERB	_	Mood=Sub|Number=Sing|Person=1|Tense=Past	0	root	_	Mood[regional]=Ind|lemma[gml]=wēten¹|SpaceAfter=No
7	,	,	PUNCT	_	_	12	punct	_	_
8	den	dee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	12	nsubj	_	Case[regional]=Acc|lemma[gml]=dê¹
9	unsen	uns	DET	_	Case=Acc|Gender=Masc|Number=Sing|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	10	det	_	lemma[gml]=unse¹
10	kråm	kråm	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	12	obj	_	lemma[gml]=krâm
11	wol	willen	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Past	12	aux	_	lemma[gml]=willen¹|Mood[regional]=Ind
12	koupen	köypen	VERB	_	VerbForm=Inf	5	acl	_	lemma[gml]=kö̂pen|SpaceAfter=No
13	!	!	PUNCT	_	_	6	punct	_	SpaceAfter=No
14	"	"	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	Vertelsel	vortelsel	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
2	van	van	ADP	_	AdpType=Prep	4	case	_	lemma[gml]=van¹
3	nen	en	DET	_	Case=Dat|Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	Case[regional]=Acc|lemma[gml]=êⁱn¹
4	buur	buur	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	1	nmod	_	Case[regional]=Acc|lemma[gml]=bûr¹|SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	den	dee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	10	nsubj	_	Case[regional]=Acc|lemma[gml]=dê¹
7	et	et	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	det	_	lemma[gml]=et²
8	harde	hard	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	lemma[gml]=hart¹
9	werken	werken	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	10	nmod	_	lemma[gml]=werken¹
10	möde	möde	ADJ	_	Degree=Pos	4	acl	_	lemma[gml]=mö̂de¹
11	en	un	CCONJ	_	_	15	cc	_	lemma[gml]=unde²
12	et	et	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	14	det	_	lemma[gml]=et²
13	pap	pap	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	14	obj	_	lemma[gml]=pap¹
14	etten	eaten	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	15	nmod	_	lemma[gml]=ēten
15	sat	sat	ADJ	_	Degree=Pos	10	conj	_	lemma[gml]=sat¹
16	was	weasen	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	cop	_	lemma[gml]=wēsen²|SpaceAfter=No
17	,	,	PUNCT	_	_	23	punct	_	_
18	en	un	CCONJ	_	_	23	cc	_	lemma[gml]=unde²
19	et	et	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	obj	_	lemma[gml]=et¹
20	in	in	ADP	_	AdpType=Prep	22	case	_	lemma[gml]=in²
21	de	de	DET	_	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	Case[regional]=Acc|lemma[gml]=dê¹
22	stad	stad	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	23	obl	_	Case[regional]=Acc|lemma[gml]=stat⁴
23	güng	gån	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	10	conj	_	lemma[gml]=gân
24	söken	söken	VERB	_	VerbForm=Inf	23	xcomp	_	lemma[gml]=sö̂ken|SpaceAfter=No
25	.	.	PUNCT	_	_	1	punct	_	_

~~~


