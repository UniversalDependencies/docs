---
layout: base
title:  'Statistics of nsubj:outer in UD_Yiddish-YiTB'
udver: '2'
---

## Treebank Statistics: UD_Yiddish-YiTB: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="yi_yitb-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="yi_yitb-dep-nsubj-pass.html">nsubj:pass</a></tt>.

13 nodes (0%) are attached to their parents as `nsubj:outer`.

13 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.23076923076923.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="yi_yitb-pos-VERB.html">VERB</a></tt>-<tt><a href="yi_yitb-pos-NOUN.html">NOUN</a></tt> (11; 85% instances), <tt><a href="yi_yitb-pos-VERB.html">VERB</a></tt>-<tt><a href="yi_yitb-pos-DET.html">DET</a></tt> (1; 8% instances), <tt><a href="yi_yitb-pos-VERB.html">VERB</a></tt>-<tt><a href="yi_yitb-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 nsubj:outer	color:blue
1	דאָס	דער	DET	_	_	3	det	_	Translit=dos|LTranslit=der
2	זיבעטע	זיבעט	ADJ	_	_	3	amod	_	Translit=zibete|LTranslit=zibet
3	געבאָט	באָטן	NOUN	_	_	9	nsubj:outer	_	Translit=gebot|LTranslit=botn
4	איז	זײַן	AUX	_	_	9	aux	_	Translit=iz|LTranslit=zayn
5	אַז	אַז	SCONJ	_	_	9	mark	_	Translit=az|LTranslit=az
6	מע	מען	PRON	_	_	9	nsubj	_	Translit=me|LTranslit=men
7	טאָר	טאָרן	AUX	_	_	9	aux	_	Translit=tor|LTranslit=torn
8	נישט	נישט	PART	_	_	9	advmod	_	Translit=nisht|LTranslit=nisht
9	גנבֿענען	גנבֿענען	VERB	_	_	0	root	_	SpaceAfter=No|Translit=ganvenen|LTranslit=ganvenen
10	.	.	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj:outer	color:blue
1	דאָס	דער	DET	_	_	9	nsubj:outer	_	Translit=dos|LTranslit=der
2	איז	זײַן	AUX	_	_	9	aux	_	Translit=iz|LTranslit=zayn
3	נישט	נישט	PART	_	_	9	advmod	_	Translit=nisht|LTranslit=nisht
4	פֿאַר	פֿאַר	ADP	_	_	5	case	_	Translit=far|LTranslit=far
5	וואָס	וואָס	PRON	_	_	9	obl	_	Translit=vos|LTranslit=vos
6	מיר	מיר	PRON	_	_	9	nsubj	_	Translit=mir|LTranslit=mir
7	זענען	זײַן	AUX	_	_	9	aux	_	Translit=zenen|LTranslit=zayn
8	אַהער	אַהער	ADV	_	_	9	advmod	_	Translit=aher|LTranslit=aher
9	געקאָמען	קאָם	VERB	_	_	0	root	_	SpaceAfter=No|Translit=gekomen|LTranslit=kom
10	.	.	PUNCT	_	_	9	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 16 nsubj:outer	color:blue
1	קומט	קומען	VERB	_	_	2	discourse	_	Translit=kumt|LTranslit=kumen
2	לאָז	לאָזן	VERB	_	_	0	root	_	Translit=loz|LTranslit=lozn
3	מיר	מיר	PRON	_	_	2	obj	_	Translit=mir|LTranslit=mir
4	זיך	זיך	PRON	_	_	5	expl:pv	_	Translit=zikh|LTranslit=zikh
5	קליגן	קליגן	VERB	_	_	2	xcomp	_	Translit=klign|LTranslit=klign
6	קעגן	קעגן	ADP	_	_	7	case	_	Translit=kegn|LTranslit=kegn
7	אים	ער	PRON	_	_	5	obl	_	SpaceAfter=No|Translit=im|LTranslit=er
8	;	;	PUNCT	_	_	13	punct	_	Translit=;|LTranslit=;
9	אַניט	אַניט	ADV	_	_	13	advmod	_	Translit=anit|LTranslit=anit
10	װעט	װעלן	AUX	_	_	13	aux	_	Translit=vet|LTranslit=veln
11	ער	ער	PRON	_	_	13	nsubj	_	Translit=er|LTranslit=er
12	זיך	זיך	PRON	_	_	13	expl:pv	_	Translit=zikh|LTranslit=zikh
13	מערן	מערן	VERB	_	_	2	parataxis	_	SpaceAfter=No|Translit=mern|LTranslit=mern
14	,	,	PUNCT	_	_	31	punct	_	Translit=,|LTranslit=,
15	און	און	CCONJ	_	_	31	cc	_	Translit=un|LTranslit=un
16	עס	עס	PRON	_	_	31	nsubj:outer	_	Translit=es|LTranslit=es
17	װעט	װעלן	AUX	_	_	31	aux	_	Translit=vet|LTranslit=veln
18	זײַן	זײַן	AUX	_	_	31	cop	_	SpaceAfter=No|Translit=zayn|LTranslit=zayn
19	,	,	PUNCT	_	_	31	punct	_	Translit=,|LTranslit=,
20	אַז	אַז	SCONJ	_	_	24	mark	_	Translit=az|LTranslit=az
21	עס	עס	PRON	_	_	24	expl	_	Translit=es|LTranslit=es
22	װעט	װעלן	AUX	_	_	24	aux	_	Translit=vet|LTranslit=veln
23	זיך	זיך	PRON	_	_	24	expl:pv	_	Translit=zikh|LTranslit=zikh
24	טרעפֿן	טרעפֿן	VERB	_	_	31	advcl	_	Translit=trefn|LTranslit=trefn
25	אַ	אַ	DET	_	_	26	det	_	Translit=a|LTranslit=a
26	מלחמה	מלחמה	NOUN	_	_	24	nsubj	_	SpaceAfter=No|Translit=milkhome|LTranslit=milkhome
27	,	,	PUNCT	_	_	24	punct	_	Translit=,|LTranslit=,
28	װעט	װעלן	AUX	_	_	31	aux	_	Translit=vet|LTranslit=veln
29	ער	ער	PRON	_	_	31	nsubj	_	Translit=er|LTranslit=er
30	אױך	אױך	ADV	_	_	31	advmod	_	Translit=oykh|LTranslit=oykh
31	צושטײן	צושטײן	VERB	_	_	13	conj	_	Translit=tsushteyn|LTranslit=tsushteyn
32	צו	צו	ADP	_	_	34	case	_	Translit=tsu|LTranslit=tsu
33	אונדזערע	אונדזער	DET	_	_	34	det:poss	_	Translit=undzere|LTranslit=undzer
34	פֿײַנט	פֿײַנט	NOUN	_	_	31	obl	_	SpaceAfter=No|Translit=faynt|LTranslit=faynt
35	,	,	PUNCT	_	_	40	punct	_	Translit=,|LTranslit=,
36	און	און	CCONJ	_	_	40	cc	_	Translit=un|LTranslit=un
37	ער	ער	PRON	_	_	40	nsubj	_	Translit=er|LTranslit=er
38	װעט	װעלן	AUX	_	_	40	aux	_	Translit=vet|LTranslit=veln
39	מלחמה	מלחמה	NOUN	_	_	40	obj	_	Translit=milkhome|LTranslit=milkhome
40	האַלטן	האַלטן	VERB	_	_	13	conj	_	Translit=haltn|LTranslit=haltn
41	אױף	אױף	ADP	_	_	42	case	_	Translit=oyf|LTranslit=oyf
42	אונדז	מיר	PRON	_	_	40	obl	_	SpaceAfter=No|Translit=undz|LTranslit=mir
43	,	,	PUNCT	_	_	46	punct	_	Translit=,|LTranslit=,
44	און	און	CCONJ	_	_	46	cc	_	Translit=un|LTranslit=un
45	װעט	װעלן	AUX	_	_	46	aux	_	Translit=vet|LTranslit=veln
46	אַרױסגײן	אַרױסגײן	VERB	_	_	13	conj	_	Translit=aroysgeyn|LTranslit=aroysgeyn
47	פֿון	פֿון	ADP	_	_	48	case	_	Translit=fun|LTranslit=fun
48	לאַנד	לאַנד	NOUN	_	_	46	obl	_	SpaceAfter=No|Translit=land|LTranslit=land
49	.	.	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


