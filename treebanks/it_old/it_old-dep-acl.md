---
layout: base
title:  'Statistics of acl in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_old-dep-acl-relcl.html">acl:relcl</a></tt>.

227 nodes (1%) are attached to their parents as `acl`.

153 instances of `acl` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.09251101321586.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (192; 85% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 acl	color:blue
1	E	e	CCONJ	cscc	_	2	cc	_	Canto=5|Verso=142
2	caddi	cadere	VERB	vi2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	Canto=5|Verso=142
3	come	come	ADV	b	_	6	mark	_	Canto=5|Verso=142
4	corpo	corpo	NOUN	sm2ms	Gender=Masc|Number=Sing	6	nsubj	_	Canto=5|Verso=142
5	morto	morire	VERB	vi3pra1ms	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	4	acl	_	Canto=5|Verso=142
6	cade	cadere	VERB	vi2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl:cmp	_	Canto=5|SpaceAfter=No|Verso=142
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 acl	color:blue
1	Ciascuna	ciascuno	DET	ai	Gender=Fem|Number=Sing|PronType=Ind	2	det	_	Canto=14|Verso=112
2	parte	parte	NOUN	sf3fs	Gender=Fem|Number=Sing	10	nsubj:pass	_	Canto=14|SpaceAfter=No|Verso=112
3	,	,	PUNCT	_	_	2	punct	_	_
4	fuor	fuori	ADV	_	_	7	advmod	_	Canto=14|Verso=112
5	che	che	SCONJ	_	_	7	mark	_	Canto=14|Verso=112
6	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Canto=14|SpaceAfter=No|Verso=112
7	oro	oro	NOUN	sm2ms	Gender=Masc|Number=Sing	10	obl	_	Canto=14|SpaceAfter=No|Verso=112
8	,	,	PUNCT	_	_	7	punct	_	_
9	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	Canto=14|Verso=112
10	rotta	rompere	VERB	vtp2ips3	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Canto=14|Verso=112
11	d'	da	ADP	epske	_	13	case	_	Canto=14|SpaceAfter=No|Verso=113
12	una	uno	DET	rifs	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	13	det	_	Canto=14|Verso=113
13	fessura	fessura	NOUN	sf1fs	Gender=Fem|Number=Sing	10	obl:agent	_	Canto=14|Verso=113
14	che	che	PRON	pr	PronType=Rel	16	nsubj	_	Canto=14|Verso=113
15	lagrime	lagrima	NOUN	sf1fp	Gender=Fem|Number=Plur	16	obj	_	Canto=14|Verso=113
16	goccia	gocciare	VERB	vta1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl:relcl	_	Canto=14|SpaceAfter=No|Verso=113
17	,	,	PUNCT	_	_	23	punct	_	_
18	le	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	19	det	_	Canto=14|Verso=114
19	quali	quale	PRON	pr	Number=Plur|PronType=Rel	23	nsubj	_	Canto=14|SpaceAfter=No|Verso=114
20	,	,	PUNCT	_	_	21	punct	_	_
21	accolte	accogliere	VERB	vta2pr	Aspect=Perf|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	19	acl	_	Canto=14|SpaceAfter=No|Verso=114
22	,	,	PUNCT	_	_	19	punct	_	_
23	fóran	forare	VERB	vta1ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	acl:relcl	_	Canto=14|Verso=114
24	quella	quello	DET	ad1fs	Gender=Fem|Number=Sing|PronType=Dem	25	det	_	Canto=14|Verso=114
25	grotta	grotta	NOUN	sf1fs	Gender=Fem|Number=Sing	23	obj	_	Canto=14|SpaceAfter=No|Verso=114
26	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 acl	color:blue
1	Quelli	quello	PRON	pd1ms	Gender=Masc|Number=Sing|Person=1|PronType=Dem	3	nsubj	_	Canto=18|Verso=86
2	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	Canto=18|Verso=86
3	Iasón	Giasone	PROPN	np	_	0	root	_	Canto=18|SpaceAfter=No|Verso=86
4	,	,	PUNCT	_	_	17	punct	_	_
5	che	che	PRON	pr	PronType=Rel	17	nsubj	_	Canto=18|Verso=86
6	per	per	ADP	epskw	_	7	case	_	Canto=18|Verso=86
7	cuore	cuore	NOUN	sm3ms	Gender=Masc|Number=Sing	17	obl	_	Canto=18|Verso=86
8	e	e	CCONJ	cscc	_	10	cc	_	Canto=18|Verso=86
9	per	per	ADP	epskw	_	10	case	_	Canto=18|Verso=86
10	senno	senno	NOUN	sm2ms	Gender=Masc|Number=Sing	7	conj	_	Canto=18|Verso=86
11	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	Canto=18|Verso=87
12	Colchi	Colchi	PROPN	np	_	17	obj	_	Canto=18|Verso=87
13	di	di	ADP	_	_	15	case	_	Canto=18|Comment=de-l|Verso=87
14	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	Canto=18|Comment=de-l|Verso=87
15	monton	montone	NOUN	sm3ms	Gender=Masc|Number=Sing	16	obl	_	Canto=18|Verso=87
16	privati	privare	VERB	vta1pr	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	12	acl	_	Canto=18|Verso=87
17	féne	fare	VERB	vta1irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	Canto=18|SpaceAfter=No|Verso=87
18	.	.	PUNCT	_	_	3	punct	_	_

~~~


