---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---


The  [fixed]() dependency   is used for certain fixed grammaticized expressions (they can be considered multiword expressions) that behave like function words or short adverbials. Usually fixed multi-word expressions are annotated in a flat structure, where all subsequent words in the expression are attached to the first one with the relation [fixed]().  
   
~~~ sdparse  
kakvóto da je,  dójde sas námi  
lit: whatever that it is, come with us  
"whatever the situation, come to us" 
fixed (kakvóto, da)
fixed (kakvóto, je)
~~~ 

~~~ sdparse
kak še da je, meselǽna víka...
lit: as will-it to be, tale-the says
"anyhow it will be, the tale says..."
fixed (kak, še)
fixed (kak, da)
fixed (kak, je)
~~~ 

Below, a set of fixed expressions observed in the Pomak treebank are shown: 

<!--In the Pomak treebank, there are several  fixed expressions. Usually, they are  attached directly to the head of the sentence.  There exist also Pomak “compound conjunctions” or rather “prepositional adverb phrases”, which may form a special sub-type of the fixed label, which are attached to the “head” of the phrase in a chain form. Generally, it appears that Pomak multi word epressions may be grouped as following: --> 


<!--
1. Standard many word phrases that function as a unit, which are depended word-by-word directly from the head of the sentence and labeled as fixed:

~~~ sdparse
namój da sí gubíš   
lit:  not  to yourself disappear   
"you cannot disappear" 
fixed (gubíš, namój)
fixed (gubíš, da) 

stóri mí ennó líra, nimó ma právi rezíl     
lit:  give me one golden pound, so as not to of myself make fool  
"give me one golden pound, so as not to make a fool of me"
fixed (právi, nimó)                    note: “nimó” is a dialectic variant of “namój”
fixed (právi, ma)                
~~~ 

-->

<!--2. Standard many word phrases that function as a unit, or lexicalized multi word expressions even of antonymic significance that consist a pair, which are depended in a chain form word-by-word from the “head” of the fixed phrase, i.e. the first token, which, in its turn, is depended from the head of the sentence and labeled under various relations:-->

~~~ sdparse
íšte na íšte astáve gi faf kavenǿno 
"willing or not willing he leaves them at the café"
advmod (astáve, íšte)
fixed(íšte, na)     
fixed(íšte, íšte)                        

kaná so razhóždaš nacýj - nasám?  
lit: what yourself stroll that way - this way?
"why do you stroll back and forth?" 
advmod(razhóždaš, nacýj)
fixed(nacýj, nasám)

 
na ennóš i ennó vréme enná májka iméšo ennó déte
lit: in once and one time a mother had a child
"once upon a time a mother had a child"
fixed(na, ennóš)
fixed(ennóš, i)
fixed(i, ennó)
fixed(ennó, vréme)
advmod(iméšo, na)

bir vakýt bir zamán imǽl je adín čülǽk 
lit: one time one era has been a man
"once upon a time there was a man" 
fixed(bir, zamán)
fixed(bir, bir) 
fixed(bir, vakýt)
advmod(imǽl, bir)

bir kač gün sétne umrǽla sí je annómu čulǽku žanána 
several days later died a man's wife 
lit: one how-many day later died a man's wife
fixed (bir, kač)
fixed (bir, gün)
fixed (bir, sétne)
advmod (umrǽla, bir)

bir kač déne sétno tórnala je za na hárpane 
several days later she set off to war 
lit: one how-many days later she has started for to war-the
fixed (bir, kač)
fixed (bir, déne)
fixed (bir, sétne)
advmod (tornála, bir)

je imǽlo 60 vodeníce nadól nagóre  
lit: there have been 60 water-mils up and down
"there have been 60 water-mills more or less" 
advmod(60, nadól)
fixed(nadól, nagóre)  
     
<!--je imǽl faf tóga za pródan tütǘne
lit: (he) has had on him for selling tobacco
"he had on him tobacco for selling"                           
fixed(za, pródan)
obl(tütǘne, za)
-->

mú dadót bir kač mésecy 
lit: (they) to him give one how-much months
"they give him several months" 
fixed(bir, kač)
advmod(mésecy, bir)
obl:tmod(dadót, mésecy)

<!--
to rábatøt éšte bir kač godíny 
lit: they work even one how-many years
"they work even several years"
fixed(bir, kač)
advmod(godíny, bir)
obl:tmod(rábatot, godíny)
-->
~~~ 

4. In pomak there also exist a category (that could be considered as a sub-type of the latter above), which functions as “prepositional adverb phrases”, consisting of two or more tokens that function as a unit. When they form a pair, they may include an adposition, an adjunction, an adverb, or even a pronoun; there is also a rare case, where the pair consists of two adpositions. When they form multi word units, they usually include an adposition and several adjunctions or adverbs. Such units usually are labeled as mark to the head of the sentence (whereas a pair of adpositions is labeled as case to the dependent nominal), while the consisting words are labeled in a chain mode as fixed to the “head” of the complex, i.e the first token. The most often used such complexes are the following:


~~~ sdparse
za da idéme na denízane
lit: for to go to sea-the
"in order for us to go to the sea" 
fixed(za, da)
mark(idéme, za)

tórnala je za na hárpane                                               
lit: has-she started for to war-the
"she has set off to war"   
fixed(za, na)
case(hárpene, za)

za to anní víkot ....
lit: for that some say...
"that is why some say...." 
fixed(za, to)
mark(víkot, za)

za málko go je izkáral na peskáne 
lit: for little it he brought to the sand
"in a little while he brought it to the sand"
fixed(za, málko)
advmod(za, izkáral)


še só platǿt za dvaš i ne za annóš 
lit: they will be paid for twice and not for once
"they will be paid twice and not once" 
fixed(za, dvaš)
advmod(platǿt, za)
fixed(za, annóš)
advmod(platǿt, za)

na ennóš gulémijen puískal da íde da rábuti 
"at once the big one asked to go to work"
fixed(na, ennóš)
advmod(puískal, na)

<!--
kadéta vídiš na drúziš múho udrívyj jé 
"wherever see-you next time (a) fly strike her"
fixed(na, drúziš)
advmod(vídiš, na)
-->

kakná še stáne pó na sétne     
lit: what will happen more to later
"what will happen a little more later"
fixed(na, sétne)
advmod(stáne, na)

UP TO THIS POINT

óti da so na predáva? 
what for it is not sold? 
lit: why to itself not sold?
fixed (óti, da)
mark (predáva, óti)

ága da atvóri vratána...  
instead of opening the door... 
lit: instead to open the door...
fixed (ága, da)
mark (atvóri, ága)

mečkána, bez da paglé čulǽkane.... 
the bear, without looking at man-the...
fixed (bez, da)
mark (paglé, bez)

da tó je ne strah ad hajvánkovete mi!  
so as not to have fear of my annimals !
fixed (da, to)
mark (strah, da)

durgá da mú só navóršot denéne 
until his days are completed 
lit: till to him-to himself complete days-the
fixed (durgá, da)
mark (navóršot, durgá)

na púsna jé dur durgá da só smračí 
he did not liberate her until it got dark
lit: not liberate her before till to darkens-it
fixed (dur,durgá)
fixed (dur, da)
mark (smračí, dur)

ága kákna varvǿt... 
mean-while (they) walk...
fixed (ága, kákna)
mark (varvǿt, ága)

ad sétno so vídeli óti je matóron ne bul tǽhan  
afterwards they saw that the motor was not theirs
fixed (ad, sétno)
advmod (vídeli, ad)

só naučíme ad blísko kólko i kakvý rábaty izlízot faf Tráki 
we learn near by how much and what products are produced in Thrace
fixed (ad, blísko)
advmod (naučíme, ad)

ad kadé uméme da gi kupóvame
where from can we buy them
lit: from where can-we them-to buy
fixed (ad, kadé)
advmod (uméme, ad)

paminól je inagáne prez 'tam 
he then passed from that place
lit: passed-he then from there
fixed (prez, 'tám)      note: “ 'tam” is a colloquial form of “itam”
advmod (paminól, prez)

izlél je ut ajtám  
he came out for there    
fixed (ut, ajtám)      note: “ajtám” and “ut” are dialectic forms for “itám” and “at”
advmod (izlél, ut)

i at 'tám nacýj i bángana daržý parýne éšte dva déne 
and from then on and the bank keeps the money an other two days  
lit: and from there onwards and bank-the keeps money-the more two days
fixed (at, 'tam)                          note: “ 'tam” is a colloquial form of “itam”
fixed (at, nacýj)
advmod (daržý, at)    

béki víkaš ta si da 'tam kuvvetlí?  
maybe you say that you are so much strong? 
fixed (da, 'tam)     note: “ 'tam” is a colloquial form of “itam”
advmod (kuvvetlí, da)   

blíze pa itám je žyvál adín čulǽček  
somewhere near there, lived a man
fixed (blíze, pa)
fixed (blíze, itám)
advmod (žyvál, blíze)     

togáva ofčéren sa je vórnol blíze pri ofcéne 
then the sheppard returned near by the sheep 
fixed (blíze, pri)
advmod (ofcéne, blíze)
obl (vórnol, ofcéne)      

«A be, Ahmét, ty še pánneš at 'túka» 
“Oh, Ahmet, you will fall from there”
fixed (at, 'túka)        note: “ 'túka” is the colloquial form of “itúka”
obl:arg (pánneš, at)    

pódila je nah kadéna tíje  
she went towards them 
lit: went-she to some place them 
fixed (nah, kadéna)     
advmod (pódila, nah)

sas tüfékane ódi na ávo etám blíze do zmijójne kóšono  
with his gun he went hunting there near the serpent's house 
lit: with gun-the went-he to hunt there near to serpent's house-the
fixed (etám, blíze)     note: “etám” is a dialectic variant of “itám”
case (kóšono, do) 
advmod (kóšono, etám)

podíla je mífko pó itám blíze do kópeløtu kóštono 
she went a little more near towards the boy's home 
lit: went-she a-little more there near to boy's home-the
advmod (mífko, pó)
advmod (pó, itám)
fixed (itám, blíze)
case (kóštono, do)
~~~


