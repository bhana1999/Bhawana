Assignment:

Problem Statement 1: Write a script in python or javascript to find the solution of the following problem
How many two or more digit numbers can you make such that digits on left are always smaller than the digits on the right in the number?

For e.g.

189 is valid (because 1<8<9 and it is at least two digit number)
198 is not valid
288 is not valid
.

Problem Statement 2: Write a script in python or javascript that would take two numbers and generate the additional steps in a json format.

For e.g. num1=1489, num2=714
Then output should be
{
"step1": { "carryString": "1", "sumString": "3" },
"step2": { "carryString": "11", "sumString": "03" },
"step3": { "carryString": "111", "sumString": "203" },
"step4": { "carryString": "111", "sumString": "2203" }
}

Explanation of Steps generation:
1. The step generation process is very simple.
2. When we do addition in a notebook, we are only concerned about carry and sum.
3. Suppose we want to add 1489 and 714.
4. The first step is to add digits at unit places. That is to add “9” (from 1489) to “4” (from 714).
5. In this process, the sum is 13 (because 9+4=13).
6. The “1” of 13 goes as carry to tens place. So the actual sum is “3” and “1” is carry.
7. As the “1” which goes to carry is at tens place, we are appending underscore for unit place. So carryString is “1”
8. Hence, in step-1, we have carryString =”1” and sumString =”3”.
9. Now its turn to add digits at tens place. That is “1” from carry of previous step, “8” from 1489 and “1” from 714.
10. The sum is “10” (1+8+1), but “1” would go as carry. So sumString updates to “03” and carryString updates to “11”.
11. Therefore, in step-2, carryString=”11” and sumString=”03”.
12. See whole sum process in screenshot (attached in this card) 


