---
layout: base
title:  'Statistics of ccomp in UD_Sardinian-ContSar'
udver: '2'
---

## Treebank Statistics: UD_Sardinian-ContSar: Relations: `ccomp`

This relation is universal.

27 nodes (0%) are attached to their parents as `ccomp`.

27 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.51851851851852.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="sc_contsar-pos-VERB.html">VERB</a></tt>-<tt><a href="sc_contsar-pos-VERB.html">VERB</a></tt> (20; 74% instances), <tt><a href="sc_contsar-pos-VERB.html">VERB</a></tt>-<tt><a href="sc_contsar-pos-ADJ.html">ADJ</a></tt> (4; 15% instances), <tt><a href="sc_contsar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sc_contsar-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="sc_contsar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sc_contsar-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="sc_contsar-pos-VERB.html">VERB</a></tt>-<tt><a href="sc_contsar-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 17 ccomp	color:blue
1	-	-	PUNCT	_	_	2	punct	_	end_char=1391|start_char=1390
2	Co	co	INTJ	_	_	0	root	_	end_char=1394|start_char=1392
3	co	co	INTJ	_	_	2	flat	_	end_char=1397|start_char=1395
4	co	co	INTJ	_	_	2	flat	_	end_char=1402|SpaceAfter=No|start_char=1398
5	..	..	PUNCT	_	_	2	punct	_	end_char=1402|SpaceAfter=No|start_char=1398
6	.	.	PUNCT	_	_	2	punct	_	end_char=1403|start_char=1402
7	Ti	tue	PRON	_	Case=Dat|Clitic=Yes|Number=Sing|Person=2|PronType=Prs	8	iobj	_	end_char=1406|start_char=1404
8	paret	pàrrere	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	parataxis	_	end_char=1412|start_char=1407
9	gasi	gasi	ADV	_	_	10	advmod	_	end_char=1417|start_char=1413
10	istranu	istranu	ADJ	_	Gender=Masc|Number=Sing	8	xcomp	_	end_char=1425|start_char=1418
11	chi	chi	SCONJ	_	_	17	mark	_	end_char=1429|start_char=1426
12	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	13	det	_	end_char=1433|start_char=1430
13	pudda	pudda	NOUN	_	Gender=Fem|Number=Sing	17	nsubj	_	end_char=1439|start_char=1434
14	che	che	ADP	PR	_	16	case	_	end_char=1443|start_char=1440
15	a	a	ADP	_	_	16	case	_	end_char=1445|start_char=1444
16	mimi	mei	PRON	_	Number=Sing|Person=1|PronType=Prs	13	nmod	_	end_char=1450|start_char=1446
17	alleghet	allegare	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	ccomp	_	end_char=1459|SpaceAfter=No|start_char=1451
18	?	?	PUNCT	_	_	8	punct	_	end_char=1460|start_char=1459

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Cunsiderende	cunsiderare	VERB	_	VerbForm=Ger	0	root	_	end_char=950|start_char=938
2	chi	chi	SCONJ	_	_	4	mark	_	end_char=954|start_char=951
3	est	èssere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	end_char=958|start_char=955
4	essentziale	essentziale	ADJ	_	Number=Sing	1	ccomp	_	end_char=970|start_char=959
5	a	a	ADP	_	_	6	mark	_	end_char=972|start_char=971
6	animare	animare	VERB	_	VerbForm=Inf	4	xcomp	_	end_char=980|start_char=973
7	s'	su	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	end_char=983|SpaceAfter=No|start_char=981
8	isvilupu	isvilupu	NOUN	_	Gender=Masc|Number=Sing	6	obj	_	end_char=991|start_char=983
9	de	de	ADP	_	_	11	case	_	end_char=994|start_char=992
10	sas	su	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	end_char=998|start_char=995
11	relatziones	relatzione	NOUN	_	Gender=Fem|Number=Plur	8	nmod	_	end_char=1010|start_char=999
12	de	de	ADP	_	_	13	case	_	end_char=1013|start_char=1011
13	amighèntzia	amighèntzia	NOUN	_	Gender=Fem|Number=Sing	11	nmod	_	end_char=1025|start_char=1014
14	intre	intre	ADP	_	_	16	case	_	end_char=1031|start_char=1026
15	sas	su	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	16	det	_	end_char=1035|start_char=1032
16	natziones	natzione	NOUN	_	Gender=Fem|Number=Plur	13	nmod	_	end_char=1045|SpaceAfter=No|start_char=1036
17	;	;	PUNCT	FC	_	16	punct	_	end_char=1046|SpacesAfter=\s\s\n|start_char=1045

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	-	-	PUNCT	_	_	2	punct	_	end_char=640|start_char=639
2	Tzertu	tzertu	ADJ	_	Gender=Masc|Number=Sing	0	root	_	end_char=647|start_char=641
3	chi	chi	SCONJ	_	_	5	mark	_	end_char=651|start_char=648
4	est	èssere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	end_char=655|start_char=652
5	zustu	zustu	ADJ	_	Gender=Masc|Number=Sing	2	ccomp	_	end_char=661|start_char=656
6	-	-	PUNCT	_	_	7	punct	_	end_char=663|start_char=662
7	cuffrimat	cufirmare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	end_char=673|start_char=664
8	Mossaforte	Mossaforte	PROPN	_	_	7	nsubj	_	end_char=684|start_char=674
9	-	-	PUNCT	_	_	7	punct	_	end_char=686|start_char=685
10	in	in	ADP	_	_	12	case	_	end_char=689|start_char=687
11	sa	su	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	end_char=692|start_char=690
12	'idda	bidda	NOUN	_	Gender=Fem|Number=Sing	20	obl	_	_
13	'e	de	ADP	_	_	14	case	_	_
14	Cumandònia	Cumandònia	PROPN	_	_	12	nmod	_	end_char=712|start_char=702
15	tottu	totu	DET	_	PronType=Tot	16	det	_	end_char=718|start_char=713
16	su	su	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	20	nsubj	_	end_char=721|start_char=719
17	chi	chi	PRON	_	PronType=Rel	18	nsubj	_	end_char=725|start_char=722
18	aggradat	agradare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	acl:relcl	_	end_char=734|start_char=726
19	est	èssere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	end_char=738|start_char=735
20	litzidu	lìtzidu	ADJ	_	Gender=Masc|Number=Sing	2	parataxis	_	end_char=746|SpaceAfter=No|start_char=739
21	;	;	PUNCT	_	_	20	punct	_	end_char=747|start_char=746

~~~


