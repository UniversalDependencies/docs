---
layout: base
title:  'Statistics of acl:relcl in UD_Tamil-TTB'
udver: '2'
---

## Treebank Statistics: UD_Tamil-TTB: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="ta_ttb-dep-acl.html">acl</a></tt>.

69 nodes (1%) are attached to their parents as `acl:relcl`.

69 instances of `acl:relcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.68115942028985.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="ta_ttb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt> (63; 91% instances), <tt><a href="ta_ttb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt> (4; 6% instances), <tt><a href="ta_ttb-pos-PRON.html">PRON</a></tt>-<tt><a href="ta_ttb-pos-VERB.html">VERB</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl:relcl	color:blue
1	ராணுவ	ராணுவம்	PROPN	NO--3SN--	Gender=Neut|Number=Sing|Person=3	3	nmod	3:nmod	Translit=rāṇuva|LTranslit=rāṇuvam
2	தளவாட	தளவாடம்	PROPN	NO--3SN--	Gender=Neut|Number=Sing|Person=3	3	nmod	3:nmod	Translit=taḷavāṭa|LTranslit=taḷavāṭam
3	தயாரிப்பில்	தயாரிப்பு	NOUN	NNL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	4	obl	4:obl:loc	Translit=tayārippil|LTranslit=tayārippu
4	நிலவும்	நிலவு	VERB	Jd-F----A	Polarity=Pos|Tense=Fut|VerbForm=Part	5	acl:relcl	5:acl:relcl	Translit=nilavum|LTranslit=nilavu
5	தடைகளை	தடை	NOUN	NNA-3PN--	Case=Acc|Gender=Neut|Number=Plur|Person=3	6	obj	4:nsubj|6:obj	Translit=taṭaikaḷai|LTranslit=taṭai
6	நீக்க	நீக்கு	VERB	Vu-T---AA	Polarity=Pos|VerbForm=Inf|Voice=Act	0	root	0:root	Translit=nīkka|LTranslit=nīkku
7	வேண்டும்	வேண்டு	AUX	VR-F3SNAA	Gender=Neut|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	6:aux	SpaceAfter=No|Translit=vēṇṭum|LTranslit=vēṇṭu
8	.	.	PUNCT	Z#-------	PunctType=Peri	6	punct	6:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 acl:relcl	color:blue
1	100	100	NUM	U=-------	NumForm=Digit|NumType=Card	2	nummod	2:nummod	Translit=100|LTranslit=100
2	கோடிக்க்	கோடி	NOUN	NND-3SN--	Case=Dat|Gender=Neut|Number=Sing|Person=3	4	nmod	4:nmod:dat	Translit=kōṭikk|LTranslit=kōṭi
3	உம்	உம்	PART	Tv-------	_	2	advmod:emph	2:advmod:emph	Translit=um|LTranslit=um
4	அதிகமான	அதிகமான	ADJ	JJ-------	_	6	amod	6:amod	Translit=atikamāna|LTranslit=atikamāna
5	மக்கள்	மக்கள்	NOUN	NNN-3PA--	Animacy=Anim|Case=Nom|Gender=Com|Number=Plur|Person=3	6	nmod	6:nmod:nom	Translit=makkaḷ|LTranslit=makkaḷ
6	தொகை	தொகை	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	7	obj	7:obj	Translit=tokai|LTranslit=tokai
7	கொண்ட	கொள்	VERB	Jd-D----A	Polarity=Pos|Tense=Past|VerbForm=Part	8	acl:relcl	8:acl:relcl	Translit=koṇṭa|LTranslit=koḷ
8	இந்தியாவில்	இந்தியா	PROPN	NEL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	11	obl	7:nsubj|11:obl:loc	Translit=intiyāvil|LTranslit=intiyā
9	பொருளாதார	பொருளாதாரம்	PROPN	NO--3SN--	Gender=Neut|Number=Sing|Person=3	10	nmod	10:nmod	Translit=poruḷātāra|LTranslit=poruḷātāram
10	வளர்ச்சி	வளர்ச்சி	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	11	nsubj	11:nsubj	Translit=vaḷarcci|LTranslit=vaḷarcci
11	ஏற்பட்ட்	ஏற்படு	VERB	Vt-T---AA	Polarity=Pos|VerbForm=Part|Voice=Act	0	root	0:root	Translit=ērpaṭṭ|LTranslit=ērpaṭu
12	உள்ளது	உள்	AUX	VR-T3SNAA	Gender=Neut|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin|Voice=Act	11	aux	11:aux	Translit=uḷḷatu|LTranslit=uḷ
13	.	.	PUNCT	Z#-------	PunctType=Peri	11	punct	11:punct	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl:relcl	color:blue
1	வழக்கம்போல்	வழக்கம்போல்	ADV	AA-------	_	6	advmod	6:advmod	Translit=valakkampōl|LTranslit=valakkampōl
2	அலுவலகத்தில்	அலுவலகம்	NOUN	NNL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	6	obl	6:obl:இரு:loc	Translit=aluvalakattil|LTranslit=aluvalakam
3	இருந்து	இரு	ADP	PP-------	AdpType=Post	2	case	2:case	Translit=iruntu|LTranslit=iru
4	மாலையில்	மாலை	NOUN	NNL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	6	obl	6:obl:loc	Translit=mālaiyil|LTranslit=mālai
5	வீட்டுக்கு	வீடு	NOUN	NND-3SN--	Case=Dat|Gender=Neut|Number=Sing|Person=3	6	obl:arg	6:obl:arg:dat	Translit=vīṭṭukku|LTranslit=vīṭu
6	வந்த	வா	VERB	Jd-D----A	Polarity=Pos|Tense=Past|VerbForm=Part	7	acl:relcl	7:acl:relcl	Translit=vanta|LTranslit=vā
7	அவர்	அவர்	PRON	RpN-3SH--	Case=Nom|Gender=Com|Number=Sing|Person=3|Polite=Form|PronType=Prs	13	nsubj	6:nsubj|13:nsubj	Translit=avar|LTranslit=avar
8	நள்ளிரவு	நள்ளிரவு	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	13	obl	13:obl:வரை:nom	Translit=naḷḷiravu|LTranslit=naḷḷiravu
9	வரை	வரை	ADP	PP-------	AdpType=Post	8	case	8:case	Translit=varai|LTranslit=varai
10	கணிப்பொறியில்	கணிப்பொறி	NOUN	NNL-3SN--	Case=Loc|Gender=Neut|Number=Sing|Person=3	13	obl	13:obl:loc	Translit=kaṇipporiyil|LTranslit=kaṇippori
11	இணையதளங்களில்	இணையதளம்	NOUN	NNL-3PN--	Case=Loc|Gender=Neut|Number=Plur|Person=3	13	obl	13:obl:loc	Translit=iṇaiyataḷaṅkaḷil|LTranslit=iṇaiyataḷam
12	உலா	உலா	NOUN	NNN-3SN--	Case=Nom|Gender=Neut|Number=Sing|Person=3	13	obj	13:obj	Translit=ulā|LTranslit=ulā
13	வந்த்	வா	VERB	Vt-T---AA	Polarity=Pos|VerbForm=Part|Voice=Act	0	root	0:root	Translit=vant|LTranslit=vā
14	உள்ளார்	உள்	AUX	VR-T3SHAA	Gender=Com|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Form|VerbForm=Fin|Voice=Act	13	aux	13:aux	Translit=uḷḷār|LTranslit=uḷ
15	.	.	PUNCT	Z#-------	PunctType=Peri	13	punct	13:punct	Translit=.|LTranslit=.

~~~


