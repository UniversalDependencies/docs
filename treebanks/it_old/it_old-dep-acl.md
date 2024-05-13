---
layout: base
title:  'Statistics of acl in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_old-dep-acl-relcl.html">acl:relcl</a></tt>.

451 nodes (1%) are attached to their parents as `acl`.

325 instances of `acl` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.39024390243902.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (384; 85% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (18; 4% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (14; 3% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (13; 3% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_old-pos-PRON.html">PRON</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


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
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 26 acl	color:blue
1	Io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	3	nsubj	_	Canto=8|Verso=103
2	non	non	ADV	b	PronType=Neg	3	advmod:neg	_	Canto=8|Verso=103
3	vidi	vedere	VERB	vta2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=8|SpaceAfter=No|Verso=103
4	,	,	PUNCT	_	_	7	punct	_	_
5	e	e	CCONJ	cscc	_	7	cc	_	Canto=8|Verso=103
6	però	però	ADV	cssc	_	7	advmod	_	Canto=8|Verso=103
7	dicer	dire	VERB	vta3fp	Tense=Pres|VerbForm=Inf|Voice=Act	3	conj	_	Canto=8|Verso=103
8	non	non	ADV	b	PronType=Neg	7	advmod:neg	_	Canto=8|Verso=103
9	posso	potere	AUX	vta2ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	Canto=8|SpaceAfter=No|Verso=103
10	,	,	PUNCT	_	_	12	punct	_	_
11	come	come	ADV	b	_	12	mark	_	Canto=8|Verso=104
12	mosser	muovere	VERB	vi2irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	3	ccomp	_	Canto=8|Verso=104
13	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	14	det	_	Canto=8|Verso=104
14	astor	astore	NOUN	sm3ms	Gender=Masc|Number=Sing	12	nsubj	_	Canto=8|Verso=104
15	celestiali	celestiale	ADJ	a2mp	Gender=Masc|Number=Plur	14	amod	_	Canto=8|SpaceAfter=No|Verso=104
16	;	;	PUNCT	_	_	18	punct	_	_
17	ma	ma	CCONJ	csca	_	18	cc	_	Canto=8|Verso=105
18	vidi	vedere	VERB	vta2irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	Canto=8|Verso=105
19	bene	bene	ADV	b	_	18	advmod	_	Canto=8|Verso=105
20	e	e	CCONJ	cscr	_	22	cc	_	Canto=8|Verso=105
21	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	Canto=8|Verso=105
22	uno	uno	PRON	pi1ms	Gender=Masc|Number=Sing|PronType=Ind	18	obj	_	Canto=8|Verso=105
23	e	e	CCONJ	cscr	_	25	cc	_	Canto=8|Verso=105
24	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	Canto=8|Verso=105
25	altro	altro	PRON	pi	Gender=Masc|Number=Sing|PronType=Ind	22	conj	_	Canto=8|Verso=105
26	mosso	muovere	VERB	vta2pr	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	22	acl	_	Canto=8|SpaceAfter=No|Verso=105
27	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 acl	color:blue
1	Quai	quale	DET	at2fp	Number=Plur|PronType=Int	2	det	_	Canto=23|Verso=103
2	barbare	barbara	NOUN	sf1fs	Gender=Fem|Number=Sing	3	nsubj	_	Canto=23|Verso=103
3	fuor	essere	VERB	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Canto=23|Verso=103
4	mai	mai	ADV	b	_	3	advmod:tmod	_	Canto=23|SpaceAfter=No|Verso=103
5	,	,	PUNCT	_	_	3	punct	_	_
6	quai	quale	DET	at2fp	Number=Plur|PronType=Int	7	det	_	Canto=23|Verso=103
7	saracine	saracina	NOUN	sf1fp	Gender=Fem|Number=Plur	2	conj	_	Canto=23|SpaceAfter=No|Verso=103
8	,	,	PUNCT	_	_	10	punct	_	_
9	cui	cui	PRON	pr	PronType=Rel	10	obl	_	Canto=23|Verso=104
10	bisognasse	bisognare	VERB	vi1cis3	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	acl:relcl	_	Canto=23|SpaceAfter=No|Verso=104
11	,	,	PUNCT	_	_	10	punct	_	_
12	per	per	ADP	epsf	_	13	mark	_	Canto=23|Verso=104
13	fare	fare	VERB	vta1fp	Tense=Pres|VerbForm=Inf|Voice=Act	10	advcl	_	Canto=23|Verso=104
14	la	la	PRON	pp3fpxac	Clitic=Yes|Gender=Fem|Number=Plur|Person=3|PronType=Prs	13	obj	_	Canto=23|Verso=104
15	ir	ire	VERB	vi3fp	Tense=Pres|VerbForm=Inf	13	xcomp	_	Canto=23|Verso=104
16	coperte	coprire	VERB	vta3pra1fp	Aspect=Perf|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	15	acl	_	Canto=23|SpaceAfter=No|Verso=104
17	,	,	PUNCT	_	_	19	punct	_	_
18	o	o	CCONJ	cscr	_	19	cc	_	Canto=23|Verso=105
19	spiritali	spirituale	ADJ	a2fp	Gender=Fem|Number=Plur	10	nsubj	_	Canto=23|Verso=105
20	o	o	CCONJ	cscr	_	22	cc	_	Canto=23|Verso=105
21	altre	altro	DET	ai	Gender=Fem|Number=Plur|PronType=Ind	22	det	_	Canto=23|Verso=105
22	discipline	disciplina	NOUN	sf1fp	Gender=Fem|Number=Plur	19	conj	_	Canto=23|SpaceAfter=No|Verso=105
23	?	?	PUNCT	_	_	3	punct	_	_

~~~


