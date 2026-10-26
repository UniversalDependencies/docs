---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_old-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="it_old-dep-nsubj-outer.html">nsubj:outer</a></tt>.

406 nodes (0%) are attached to their parents as `nsubj:pass`.

306 instances of `nsubj:pass` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.94334975369458.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (232; 57% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (142; 35% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (15; 4% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (11; 3% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_old-pos-X.html">X</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Queste	questo	DET	ad1fp	Gender=Fem|Number=Plur|PronType=Dem	2	det	2:det	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_1
2	parole	parola	NOUN	sf1fp	Gender=Fem|Number=Plur	7	nsubj:pass	7:nsubj:pass	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_2
3	da	da	ADP	epski	_	4	case	4:case	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_3
4	lor	loro	PRON	pp3plco	Number=Plur|Person=3|PronType=Prs	7	obl:agent	7:obl:agent	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_4
5	ci	ci	PRON	pp1pyda	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	7	iobj	7:iobj	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_5
6	fuor	essere	AUX	vi4irp3	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	Canto=5|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_6
7	porte	porgere	VERB	vtp2irp3	Aspect=Perf|Gender=Fem|Number=Plur|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	Canto=5|SpaceAfter=No|Verso=108|UniqueTokenId=OldItalian_Dante_Inferno-185_7
8	.	.	PUNCT	_	_	7	punct	7:punct	UniqueTokenId=OldItalian_Dante_Inferno-185_8

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 17 nsubj:pass	color:blue
1	Le	la	DET	adfp	Gender=Fem|Number=Plur|PronType=Dem	2	det	2:det	Canto=26|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-791_1
2	fronde	fronda	NOUN	sf1fp	Gender=Fem|Number=Plur	14	obj	14:obj	Canto=26|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-791_2
3	onde	onde	PRON	p	_	5	obl:lmod	5:obl:lmod	Canto=26|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-791_3
4	s'	si	PRON	pf3ypr	Person=3|PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	Canto=26|Clitic=Yes|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-791_4
5	infronda	infrondare	VERB	vi+1ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	2:acl:relcl	Canto=26|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-791_5
6	tutto	tutto	DET	ai1ms	Gender=Masc|Number=Sing|PronType=Ind	8	det	8:det	Canto=26|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-791_6
7	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	8:det	Canto=26|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-791_7
8	orto	orto	NOUN	sm2ms	Gender=Masc|Number=Sing	5	nsubj	5:nsubj	Canto=26|Verso=64|UniqueTokenId=OldItalian_Dante_Paradiso-791_8
9	de	di	ADP	eps	_	11	case	11:case	Canto=26|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-791_9
10	l'	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	11:det	Canto=26|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-791_10
11	ortolano	ortolano	NOUN	sm2ms	Gender=Masc|Number=Sing	8	nmod	8:nmod	Canto=26|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-791_11
12	etterno	eterno	ADJ	a1ms	Gender=Masc|Number=Sing	11	amod	11:amod	Canto=26|SpaceAfter=No|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-791_12
13	,	,	PUNCT	_	_	2	punct	2:punct	UniqueTokenId=OldItalian_Dante_Paradiso-791_13
14	am'	amare	VERB	vta1ips1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=26|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-791_14
15	io	io	PRON	pp1slso	Person=1|Poss=Yes|PronType=Prs	14	nsubj	14:nsubj	Canto=26|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-791_15
16	cotanto	cotanto	ADV	b	_	14	advmod	14:advmod	Canto=26|Verso=65|UniqueTokenId=OldItalian_Dante_Paradiso-791_16
17	quanto	quanto	PRON	pr1ms	Gender=Masc|Number=Sing|PronType=Rel	25	nsubj:pass	25:nsubj:pass	Canto=26|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-791_17
18	da	da	ADP	epski	_	19	case	19:case	Canto=26|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-791_18
19	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	25	obl:agent	25:obl:agent	Canto=26|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-791_19
20	a	a	ADP	epsk1d	_	21	case	21:case	Canto=26|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-791_20
21	lor	loro	PRON	pp3plco	Number=Plur|Person=3|PronType=Prs	25	obl	25:obl	Canto=26|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-791_21
22	di	di	ADP	epsk8	_	23	case	23:case	Canto=26|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-791_22
23	bene	bene	NOUN	sm3ms	Gender=Masc|Number=Sing	17	nmod	17:nmod	Canto=26|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-791_23
24	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	aux:pass	25:aux:pass	Canto=26|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-791_24
25	porto	porgere	VERB	vtp2ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	16	advcl	16:advcl	Canto=26|SpaceAfter=No|Verso=66|UniqueTokenId=OldItalian_Dante_Paradiso-791_25
26	»	»	PUNCT	_	_	14	punct	14:punct	SpaceAfter=No|UniqueTokenId=OldItalian_Dante_Paradiso-791_26
27	.	.	PUNCT	_	_	14	punct	14:punct	UniqueTokenId=OldItalian_Dante_Paradiso-791_27

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj:pass	color:blue
1	Ma	ma	CCONJ	csca	_	15	cc	15:cc	Canto=25|Verso=25|UniqueTokenId=OldItalian_Dante_Paradiso-750_1
2	poi	poi	ADV	_	_	8	advmod:tmod	8:advmod:tmod	UniqueTokenId=OldItalian_Dante_Paradiso-750_2
3	che	che	SCONJ	_	_	8	mark	8:mark	UniqueTokenId=OldItalian_Dante_Paradiso-750_3
4	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	5:det	Canto=25|Verso=25|UniqueTokenId=OldItalian_Dante_Paradiso-750_4
5	gratular	gratulare	VERB	vi1fpsm3ms	Tense=Pres|VerbForm=Inf	8	nsubj:pass	8:nsubj:pass	Canto=25|Verso=25|UniqueTokenId=OldItalian_Dante_Paradiso-750_5
6	si	si	PRON	pf3ypa	Person=3|PronType=Prs|Reflex=Yes	8	expl:pass	8:expl:pass	Canto=25|Clitic=Yes|Verso=25|UniqueTokenId=OldItalian_Dante_Paradiso-750_6
7	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	aux:pass	8:aux:pass	Canto=25|Verso=25|UniqueTokenId=OldItalian_Dante_Paradiso-750_7
8	assolto	assolvere	VERB	vtp2its3	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	15	advcl	15:advcl	Canto=25|SpaceAfter=No|Verso=25|UniqueTokenId=OldItalian_Dante_Paradiso-750_8
9	,	,	PUNCT	_	_	8	punct	8:punct	UniqueTokenId=OldItalian_Dante_Paradiso-750_9
10	tacito	tacito	ADJ	b	_	15	advcl:pred	15:advcl:pred	Canto=25|Verso=26|UniqueTokenId=OldItalian_Dante_Paradiso-750_10
11	coram	coram	X	_	Foreign=Yes	15	obl:lmod	15:obl:lmod	Canto=25|Verso=26|UniqueTokenId=OldItalian_Dante_Paradiso-750_11
12	me	me	PRON	pp1slco	Person=1|Poss=Yes|PronType=Prs	11	obj	11:obj	Canto=25|Verso=26|UniqueTokenId=OldItalian_Dante_Paradiso-750_12
13	ciascun	ciascuno	PRON	pi	PronType=Ind	15	nsubj	15:nsubj	Canto=25|Verso=26|UniqueTokenId=OldItalian_Dante_Paradiso-750_13
14	s'	si	PRON	pf3ypr	Person=3|PronType=Prs|Reflex=Yes	15	expl:pv	15:expl:pv	Canto=25|Clitic=Yes|Verso=26|UniqueTokenId=OldItalian_Dante_Paradiso-750_14
15	affisse	affiggere	VERB	vta+2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Canto=25|SpaceAfter=No|Verso=26|UniqueTokenId=OldItalian_Dante_Paradiso-750_15
16	,	,	PUNCT	_	_	17	punct	17:punct	UniqueTokenId=OldItalian_Dante_Paradiso-750_16
17	ignito	ignito	ADJ	a1ms	Gender=Masc|Number=Sing	15	advcl:pred	15:advcl:pred	Canto=25|Verso=27|UniqueTokenId=OldItalian_Dante_Paradiso-750_17
18	sì	così	ADV	b	_	17	advmod	17:advmod	Canto=25|Verso=27|UniqueTokenId=OldItalian_Dante_Paradiso-750_18
19	che	che	SCONJ	cssu	_	20	mark	20:mark	Canto=25|Verso=27|UniqueTokenId=OldItalian_Dante_Paradiso-750_19
20	vincea	vincere	VERB	vta2iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	17	advcl	17:advcl	Canto=25|Verso=27|UniqueTokenId=OldItalian_Dante_Paradiso-750_20
21	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	23:det	Canto=25|Verso=27|UniqueTokenId=OldItalian_Dante_Paradiso-750_21
22	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	23	det:poss	23:det:poss	Canto=25|Verso=27|UniqueTokenId=OldItalian_Dante_Paradiso-750_22
23	volto	volto	NOUN	sm2ms	Gender=Masc|Number=Sing	20	obj	20:obj	Canto=25|SpaceAfter=No|Verso=27|UniqueTokenId=OldItalian_Dante_Paradiso-750_23
24	.	.	PUNCT	_	_	15	punct	15:punct	UniqueTokenId=OldItalian_Dante_Paradiso-750_24

~~~


