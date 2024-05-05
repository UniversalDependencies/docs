---
layout: base
title:  'Statistics of aux:pass in UD_Hindi-PUD'
udver: '2'
---

## Treebank Statistics: UD_Hindi-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="hi_pud-dep-aux.html">aux</a></tt>.

203 nodes (1%) are attached to their parents as `aux:pass`.

200 instances of `aux:pass` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01477832512315.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="hi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_pud-pos-AUX.html">AUX</a></tt> (201; 99% instances), <tt><a href="hi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hi_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="hi_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux:pass	color:blue
1	अधिकतम	अधिकतम	ADJ	JJS	_	2	amod	_	Translit=adhikatama|LTranslit=adhikatama
2	$5,000	$5000	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	4	compound	_	Translit=$5,000|LTranslit=$5000
3	प्रति	प्रति	DET	QF	_	4	det	_	Translit=prati|LTranslit=prati
4	व्यक्ति	व्यक्ति	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	6	nmod:poss	_	Translit=vyakti|LTranslit=vyakti
5	की	का	ADP	IN	Case=Gen|Gender=Fem	4	case	_	Translit=kī|LTranslit=kā
6	स्वीकृति	स्वीकृति	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	7	nsubj:pass	_	Translit=svīkr̥ti|LTranslit=svīkr̥ti
7	दी	देना	VERB	VBI	Gender=Fem|Number=Sing|Person=3	0	root	_	LTranslit=denā|Translit=dī
8	गयी	जाना	AUX	VXH	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3	7	aux:pass	_	LTranslit=jānā|Translit=gayī
9	है	है	AUX	VXH	Gender=Fem|Number=Sing|Person=3|Tense=Pres	7	aux	_	SpaceAfter=No|Translit=hai|LTranslit=hai
10	।	।	PUNCT	.	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 aux:pass	color:blue
1	रडार	रडार	NOUN	NN	Gender=Masc|Number=Sing	2	compound	_	Translit=raḍāra|LTranslit=raḍāra
2	प्रणाली	प्रणाली	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	39	nsubj	_	Translit=praṇālī|LTranslit=praṇālī
3	जिसमें	जो	PRON	REL	Case=Acc|Gender[psor]=Fem|Number=Sing|Number[psor]=Sing|PronType=Prs	7	obl	_	Translit=jisameṁ|LTranslit=jo
4	एल्वारेज	एल्वारेज	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	7	nsubj:pass	_	Translit=elvāreja|LTranslit=elvāreja
5	को	को	ADP	IN	Case=Acc	4	case	_	Translit=ko|LTranslit=ko
6	सबसे	सबसे	ADJ	JJS	_	7	advmod	_	Translit=sabase|LTranslit=sabase
7	ज्यादा	ज्यादा	ADJ	JJ	_	2	acl:relcl	_	Translit=jyādā|LTranslit=jyādā
8	जाना	जाना	AUX	VBI	Gender=Masc|Number=Sing|Person=3	7	aux	_	LTranslit=jānanā|Translit=jānā
9	जाता	जाना	AUX	VXH	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3	7	aux:pass	_	LTranslit=jānā|Translit=jātā
10	है	है	AUX	VXH	Gender=Masc|Number=Sing|Person=3|Tense=Pres	7	aux	_	Translit=hai|LTranslit=hai
11	और	और	CCONJ	CC	_	7	cc	_	ToDo=cc-without-conj|Translit=aura|LTranslit=aura
12	जिसने	जो	PRON	PDEM	Number=Sing	15	nsubj	_	Translit=jisane|LTranslit=jo
13	उड्डयन	उड्डयन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	15	nmod:poss	_	Translit=uḍḍayana|LTranslit=uḍḍayana
14	के	का	ADP	IN	Case=Gen|Gender=Masc|Number=Sing	13	case	_	Translit=ke|LTranslit=kā
15	क्षेत्र	क्षेत्र	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	19	obl	_	Translit=kṣetra|LTranslit=kṣetra
16	में	में	ADP	IN	Case=Loc	15	case	_	Translit=meṁ|LTranslit=meṁ
17	बड़ी	बडा	ADJ	JJ	Gender=Fem	18	amod	_	Translit=baṛī|LTranslit=baḍā
18	भूमिका	भूमिका	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	19	obj	_	Translit=bhūmikā|LTranslit=bhūmikā
19	निभाई	निभाना	VERB	VBI	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Past	7	acl:relcl	_	LTranslit=nibhānā|SpaceAfter=No|Translit=nibhāī
20	,	,	PUNCT	,	_	19	punct	_	Translit=,|LTranslit=,
21	विशेष	विशेष	ADJ	JJ	_	22	amod	_	Translit=viśeṣa|LTranslit=viśeṣa
22	रूप	रूप	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	39	obl	_	Translit=rūpa|LTranslit=rūpa
23	से	से	ADP	IN	Case=Acc	22	case	_	Translit=se|LTranslit=se
24	युद्ध	युद्ध	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	39	obl	_	Translit=yuddha|LTranslit=yuddha
25	के	के	ADP	IN	_	24	case	_	Translit=ke|LTranslit=ke
26	बाद	बाद	ADP	IN	_	25	fixed	_	Translit=bāda|LTranslit=bāda
27	बर्लिन	बर्लिन	PROPN	NNP	Gender=Masc|Number=Sing	34	obl	_	Translit=barlina|LTranslit=barlina
28	एयरलिफ्ट	एयरलिफ्ट	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing	27	flat:name	_	Translit=eyaraliphṭa|LTranslit=eyaraliphṭa
29	में	में	ADP	IN	Case=Loc	27	case	_	SpaceAfter=No|Translit=meṁ|LTranslit=meṁ
30	,	,	PUNCT	,	_	27	punct	_	Translit=,|LTranslit=,
31	जमीन	जमीन	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	34	obl	_	Translit=jamīna|LTranslit=jamīna
32	से	से	ADP	IN	Case=Loc	31	case	_	Translit=se|LTranslit=se
33	नियंत्रित	नियंत्रित	ADJ	JJ	_	34	xcomp	_	Translit=niyaṁtrita|LTranslit=niyaṁtrita
34	पहुंच	पहुंचना	VERB	NN	Case=Nom|Gender=Fem|Number=Sing	39	xcomp	_	LTranslit=pahuṁcanā|Translit=pahuṁca
35	(	(	PUNCT	(	_	36	punct	_	SpaceAfter=No|Translit=(|LTranslit=(
36	जीसीए	जीसीए	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	33	appos	_	SpaceAfter=No|Proper=True|Translit=jīsīe|LTranslit=jīsīe
37	)	)	PUNCT	)	_	36	punct	_	Translit=)|LTranslit=)
38	वाली	वाला	ADP	SFN	Case=Nom|Gender=Fem|Number=Sing	33	case	_	Translit=vālī|LTranslit=vālā
39	थी	थाना	VERB	VBI	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	LTranslit=thānā|SpaceAfter=No|Translit=thī
40	।	।	PUNCT	.	_	39	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 aux:pass	color:blue
1	उनके	वह	PRON	PRP	Case=Acc|Person=3	2	nmod:poss	_	Translit=unake|LTranslit=vaha
2	हवाले	हवाला	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	3	obj	_	ToDo=pobj|Translit=havāle|LTranslit=havālā
3	से	से	ADP	IN	Case=Acc	0	root	_	Translit=se|LTranslit=se
4	कहा	कहना	VERB	VBI	Gender=Masc|Number=Sing|Person=3	3	fixed	_	LTranslit=kahanā|Translit=kahā
5	गया	जाना	AUX	VXH	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	aux:pass	_	LTranslit=jānā|SpaceAfter=No|Translit=gayā
6	,	,	PUNCT	,	_	29	punct	_	Translit=,|LTranslit=,
7	“	“	PUNCT	``	_	29	punct	_	SpaceAfter=No|Translit=“|LTranslit=“
8	हम	हम	PRON	PRP	Case=Nom|Number=Plur|Person=1	29	nsubj	_	Translit=hama|LTranslit=hama
9	केवल	केवल	DET	QF	_	11	det	_	Translit=kevala|LTranslit=kevala
10	उन	वह	DET	DT	Definite=Def|Number=Plur	11	det	_	Translit=una|LTranslit=vaha
11	लोगों	लोग	NOUN	NN	Case=Acc|Number=Plur	19	obl	_	Translit=logoṁ|LTranslit=loga
12	के	के	ADP	IN	_	11	case	_	Translit=ke|LTranslit=ke
13	लिए	लिए	ADP	IN	_	12	fixed	_	Translit=lie|LTranslit=lie
14	मुकदमेबाजी	मुकदमेबाजी	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	16	nmod:poss	_	Translit=mukadamebājī|LTranslit=mukadamebājī
15	की	का	ADP	IN	Case=Gen|Gender=Fem	14	case	_	Translit=kī|LTranslit=kā
16	गुंजाइश	गुंजाइश	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	19	obj	_	Translit=guṁjāiśa|LTranslit=guṁjāiśa
17	को	को	ADP	IN	Case=Acc	16	case	_	Translit=ko|LTranslit=ko
18	सीमित	सीमित	ADJ	JJ	_	19	compound:lvc	_	Translit=sīmita|LTranslit=sīmita
19	करने	करना	VERB	VINF	VerbForm=Inf	22	xcomp	_	LTranslit=karanā|Translit=karane
20	के	का	ADP	IN	Case=Gen|Gender=Masc|Number=Plur	19	case	_	Translit=ke|LTranslit=kā
21	संभावित	संभावित	ADJ	JJ	_	22	amod	_	Translit=saṁbhāvita|LTranslit=saṁbhāvita
22	रास्तों	रास्ता	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	29	obl	_	Translit=rāstoṁ|LTranslit=rāstā
23	के	के	ADP	IN	_	22	case	_	Translit=ke|LTranslit=ke
24	बारे	बारे	ADP	IN	_	23	fixed	_	Translit=bāre|LTranslit=bāre
25	में	में	ADP	IN	_	23	fixed	_	Translit=meṁ|LTranslit=meṁ
26	सक्रिय	सक्रिय	ADJ	JJ	_	27	amod	_	Translit=sakriya|LTranslit=sakriya
27	रूप	रूप	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	29	obl	_	Translit=rūpa|LTranslit=rūpa
28	से	से	ADP	IN	Case=Acc	27	case	_	Translit=se|LTranslit=se
29	सोच	सोचना	VERB	VB	_	2	acl	_	LTranslit=socanā|Translit=soca
30	रहे	रहना	AUX	VBI	Aspect=Prog|Mood=Ind|Number=Plur|Person=3	29	aux	_	LTranslit=rahanā|Translit=rahe
31	हैं	है	AUX	VBI	Number=Plur|Person=3|Tense=Pres	29	aux	_	Translit=haiṁ|LTranslit=hai
32	जो	जो	PRON	REL	Case=Nom|Number[psor]=Plur|PronType=Prs	40	nsubj	_	ToDo=जो|Translit=jo|LTranslit=jo
33	किसी	कोई	DET	DTI	_	34	det	_	Translit=kisī|LTranslit=koī
34	परियोजना	परियोजना	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	40	obl	_	Translit=pariyojanā|LTranslit=pariyojanā
35	में	में	ADP	IN	Case=Acc	34	case	_	Translit=meṁ|LTranslit=meṁ
36	वास्तविक	वास्तविक	ADJ	JJ	_	37	amod	_	Translit=vāstavika|LTranslit=vāstavika
37	रूप	रूप	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	40	obl	_	Translit=rūpa|LTranslit=rūpa
38	से	से	ADP	IN	Case=Acc	37	case	_	Translit=se|LTranslit=se
39	शामिल	शामिल	ADJ	JJ	_	40	compound:lvc	_	Translit=śāmila|LTranslit=śāmila
40	हैं	हैना	VERB	VBI	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	11	acl:relcl	_	LTranslit=hainā|SpaceAfter=No|Translit=haiṁ
41	।	।	PUNCT	.	_	29	punct	_	SpaceAfter=No|Translit=.|LTranslit=.
42	”	”	PUNCT	``	_	29	punct	_	Translit=”|LTranslit=”

~~~


