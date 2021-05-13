---
layout: base
title:  'Statistics of aux:pass in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="hi_pud-dep-aux.html">aux</a></tt>.

211 nodes (1%) are attached to their parents as `aux:pass`.

211 instances of `aux:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28436018957346.

The following 4 pairs of parts of speech are connected with `aux:pass`: <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-AUX.html">AUX</a></tt> (188; 89% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-AUX.html">AUX</a></tt> (20; 9% instances), <tt><a href="hi_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="hi_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="hi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux:pass	color:blue
1	अधिकतम	_	ADJ	JJS	_	2	amod	_	Translit=adhikatama
2	$5,000	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	compound	_	OrigForm=$5000|Translit=$5,000
3	प्रति	_	DET	QF	_	4	det	_	Translit=prati
4	व्यक्ति	_	NOUN	NN	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	6	nmod:poss	_	Translit=vyakti
5	की	_	ADP	IN	Case=Gen|Gender=Fem	4	case	_	Translit=kī
6	स्वीकृति	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	Translit=svīkr̥ti
7	दी	_	VERB	VBI	Gender=Fem|Number=Sing|Person=3	0	root	_	Translit=dī
8	गयी	_	AUX	VXH	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3	7	aux:pass	_	Translit=gayī
9	है	_	AUX	VXH	Gender=Fem|Number=Sing|Person=3|Tense=Pres	7	aux	_	SpaceAfter=No|Translit=hai
10	।	_	PUNCT	.	_	7	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 aux:pass	color:blue
1	हालांकि	_	SCONJ	IN	_	15	mark	_	SpaceAfter=No|Translit=hālāṁki
2	,	_	PUNCT	,	_	15	punct	_	Translit=,
3	पाइरस	_	PROPN	NNP	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	15	nsubj:pass	_	Translit=pāirasa
4	को	_	ADP	IN	Case=Acc	3	case	_	Translit=ko
5	दक्षिणी	_	ADJ	JJ	_	6	amod	_	Translit=dakṣiṇī
6	इटली	_	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	obl	_	Translit=iṭalī
7	में	_	ADP	IN	Case=Loc	6	case	_	Translit=meṁ
8	व्यापार	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	obj	_	Translit=vyāpāra
9	करने	_	VERB	VINF	VerbForm=Inf	15	advcl	_	Translit=karane
10	के	_	ADP	IN	Case=Erg	9	case	_	Translit=ke
11	लिेए	_	ADP	IN	_	10	fixed	_	Translit=liेe
12	सिसली	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	13	obj	_	Translit=sisalī
13	छोड़ने	_	VERB	VINF	VerbForm=Inf	15	acl	_	Translit=choṛane
14	को	_	ADP	IN	Case=Acc	13	case	_	Translit=ko
15	बाध्य	_	ADJ	JJ	_	0	root	_	Translit=bādhya
16	किया	_	AUX	VBI	Gender=Masc|Number=Sing|Person=3	15	cop	_	Translit=kiyā
17	गया	_	AUX	VXH	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3	15	aux:pass	_	Translit=gayā
18	था	_	AUX	VXH	Gender=Masc|Number=Sing|Person=3|Tense=Past	15	aux	_	SpaceAfter=No|Translit=thā
19	।	_	PUNCT	.	_	15	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 aux:pass	color:blue
1	उनके	_	PRON	PRP	Animacy=Anim|Case=Acc|Person=3	2	nmod:poss	_	Translit=unake
2	हवाले	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	ToDo=pobj|Translit=havāle
3	से	_	ADP	IN	Case=Acc	0	root	_	Translit=se
4	कहा	_	VERB	VBI	Gender=Masc|Number=Sing|Person=3	3	fixed	_	Translit=kahā
5	गया	_	AUX	VXH	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	aux:pass	_	SpaceAfter=No|Translit=gayā
6	,	_	PUNCT	,	_	29	punct	_	Translit=,
7	“	_	PUNCT	``	_	29	punct	_	SpaceAfter=No|Translit=“
8	हम	_	PRON	PRP	Animacy=Anim|Case=Nom|Number=Plur|Person=1	29	nsubj	_	Translit=hama
9	केवल	_	DET	QF	_	11	det	_	Translit=kevala
10	उन	_	DET	DT	Definite=Def|Number=Plur	11	det	_	Translit=una
11	लोगों	_	NOUN	NN	Animacy=Anim|Case=Acc|Number=Plur	19	obl	_	Translit=logoṁ
12	के	_	ADP	IN	_	11	case	_	Translit=ke
13	लिए	_	ADP	IN	_	12	fixed	_	Translit=lie
14	मुकदमेबाजी	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	16	nmod:poss	_	Translit=mukadamebājī
15	की	_	ADP	IN	Case=Gen|Gender=Fem	14	case	_	Translit=kī
16	गुंजाइश	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	19	obj	_	Translit=guṁjāiśa
17	को	_	ADP	IN	Case=Acc	16	case	_	Translit=ko
18	सीमित	_	ADJ	JJ	_	19	compound:lvc	_	Translit=sīmita
19	करने	_	VERB	VINF	VerbForm=Inf	22	xcomp	_	Translit=karane
20	के	_	ADP	IN	Case=Gen|Gender=Masc|Number=Plur	19	case	_	Translit=ke
21	संभावित	_	ADJ	JJ	_	22	amod	_	Translit=saṁbhāvita
22	रास्तों	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	29	obl	_	Translit=rāstoṁ
23	के	_	ADP	IN	_	22	case	_	Translit=ke
24	बारे	_	ADP	IN	_	23	fixed	_	Translit=bāre
25	में	_	ADP	IN	_	23	fixed	_	Translit=meṁ
26	सक्रिय	_	ADJ	JJ	_	27	amod	_	Translit=sakriya
27	रूप	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	29	obl	_	Translit=rūpa
28	से	_	ADP	IN	Case=Acc	27	case	_	Translit=se
29	सोच	_	VERB	VB	_	2	acl	_	Translit=soca
30	रहे	_	AUX	VBI	Aspect=Prog|Mood=Ind|Number=Plur|Person=3	29	aux	_	Translit=rahe
31	हैं	_	AUX	VBI	Number=Plur|Person=3|Tense=Pres	29	aux	_	Translit=haiṁ
32	जो	_	PRON	REL	Case=Nom|Number[psor]=Plur|PronType=Prs	40	nsubj	_	ToDo=जो|Translit=jo
33	किसी	_	DET	DTI	_	34	det	_	Translit=kisī
34	परियोजना	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	40	obl	_	Translit=pariyojanā
35	में	_	ADP	IN	Case=Acc	34	case	_	Translit=meṁ
36	वास्तविक	_	ADJ	JJ	_	37	amod	_	Translit=vāstavika
37	रूप	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	40	obl	_	Translit=rūpa
38	से	_	ADP	IN	Case=Acc	37	case	_	Translit=se
39	शामिल	_	ADJ	JJ	_	40	compound:lvc	_	Translit=śāmila
40	हैं	_	VERB	VBI	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	11	acl:relcl	_	SpaceAfter=No|Translit=haiṁ
41	।	_	PUNCT	.	_	29	punct	_	SpaceAfter=No|Translit=.
42	”	_	PUNCT	``	_	29	punct	_	Translit=”

~~~


