---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_old-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="it_old-dep-nsubj-outer.html">nsubj:outer</a></tt>.

398 nodes (0%) are attached to their parents as `nsubj:pass`.

302 instances of `nsubj:pass` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.94974874371859.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (229; 58% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (140; 35% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (11; 3% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (11; 3% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_old-pos-X.html">X</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Queste	questo	DET	ad1fp	Gender=Fem|Number=Plur|PronType=Dem	2	det	_	Canto=5|Verso=108
2	parole	parola	NOUN	sf1fp	Gender=Fem|Number=Plur	7	nsubj:pass	_	Canto=5|Verso=108
3	da	da	ADP	epski	_	4	case	_	Canto=5|Verso=108
4	lor	loro	PRON	pp3plco	Number=Plur|Person=3|PronType=Prs	7	obl:agent	_	Canto=5|Verso=108
5	ci	ci	PRON	pp1pyda	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	7	iobj	_	Canto=5|Verso=108
6	fuor	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	Canto=5|Verso=108
7	porte	porgere	VERB	vtp2irp3	Aspect=Perf|Gender=Fem|Number=Plur|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Canto=5|SpaceAfter=No|Verso=108
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 17 nsubj:pass	color:blue
1	Le	la	DET	adfp	Gender=Fem|Number=Plur|PronType=Dem	2	det	_	Canto=26|Verso=64
2	fronde	fronda	NOUN	sf1fp	Gender=Fem|Number=Plur	14	obj	_	Canto=26|Verso=64
3	onde	onde	PRON	p	_	5	obl:lmod	_	Canto=26|Verso=64
4	s'	si	PRON	pf3ypr	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	5	expl:pv	_	Canto=26|Verso=64
5	infronda	infrondare	VERB	vi+1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	Canto=26|Verso=64
6	tutto	tutto	DET	ai1ms	Gender=Masc|Number=Sing|PronType=Ind	8	det	_	Canto=26|Verso=64
7	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	Canto=26|Verso=64
8	orto	orto	NOUN	sm2ms	Gender=Masc|Number=Sing	5	nsubj	_	Canto=26|Verso=64
9	de	di	ADP	eps	_	11	case	_	Canto=26|Verso=65
10	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	Canto=26|Verso=65
11	ortolano	ortolano	NOUN	sm2ms	Gender=Masc|Number=Sing	8	nmod	_	Canto=26|Verso=65
12	etterno	eterno	ADJ	a1ms	Gender=Masc|Number=Sing	11	amod	_	Canto=26|Verso=65|SpaceAfter=No
13	,	,	PUNCT	_	_	2	punct	_	_
14	am'	amare	VERB	vta1ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Canto=26|Verso=65
15	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	14	nsubj	_	Canto=26|Verso=65
16	cotanto	cotanto	ADV	b	_	14	advmod	_	Canto=26|Verso=65
17	quanto	quanto	PRON	pr1ms	Gender=Masc|Number=Sing|PronType=Rel	25	nsubj:pass	_	Canto=26|Verso=66
18	da	da	ADP	epski	_	19	case	_	Canto=26|Verso=66
19	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	25	obl:agent	_	Canto=26|Verso=66
20	a	a	ADP	epsk1d	_	21	case	_	Canto=26|Verso=66
21	lor	loro	PRON	pp3plco	Number=Plur|Person=3|PronType=Prs	25	obl	_	Canto=26|Verso=66
22	di	di	ADP	epsk8	_	23	case	_	Canto=26|Verso=66
23	bene	bene	NOUN	sm3ms	Gender=Masc|Number=Sing	17	nmod	_	Canto=26|Verso=66
24	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux:pass	_	Canto=26|Verso=66
25	porto	porgere	VERB	vtp2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	16	advcl	_	Canto=26|Verso=66|SpaceAfter=No
26	»	»	PUNCT	_	_	14	punct	_	SpaceAfter=No
27	.	.	PUNCT	_	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 nsubj:pass	color:blue
1	Quivi	quivi	ADV	b	_	3	advmod:tmod	_	Canto=22|Verso=109
2	si	si	PRON	pf3ypa	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	3	expl:pass	_	Canto=22|Verso=109
3	veggion	vedere	VERB	vtp2ipp3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Canto=22|Verso=109
4	de	di	ADP	eps	_	6	case	_	Canto=22|Verso=109
5	le	la	DET	adfp	Gender=Fem|Number=Plur|PronType=Dem	6	det	_	Canto=22|Verso=109
6	genti	gente	NOUN	sf3fp	Gender=Fem|Number=Plur	3	obl	_	Canto=22|Verso=109
7	tue	tuo	DET	as1fp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	6	det:poss	_	Canto=22|Verso=109
8	Antigone	Antigone	PROPN	np	_	3	nsubj:pass	_	Canto=22|SpaceAfter=No|Verso=110
9	,	,	PUNCT	_	_	10	punct	_	_
10	Deifile	Deifile	PROPN	np	_	8	conj	_	Canto=22|Verso=110
11	e	e	CCONJ	cscr	_	12	cc	_	Canto=22|Verso=110
12	Argia	Argia	PROPN	np	_	8	conj	_	Canto=22|SpaceAfter=No|Verso=110
13	,	,	PUNCT	_	_	15	punct	_	_
14	e	e	CCONJ	cscr	_	15	cc	_	Canto=22|Verso=111
15	Ismene	Ismene	PROPN	np	_	8	conj	_	Canto=22|Verso=111
16	sì	così	ADV	b	_	17	advmod	_	Canto=22|Verso=111
17	trista	tristo	ADJ	a1fs	Gender=Fem|Number=Sing	15	amod	_	Canto=22|Verso=111
18	come	come	ADV	b	_	19	mark	_	Canto=22|Verso=111
19	fue	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	17	advcl:cmp	_	Canto=22|SpaceAfter=No|Verso=111
20	.	.	PUNCT	_	_	3	punct	_	_

~~~


