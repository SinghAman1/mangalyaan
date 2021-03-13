# Mangalyaan
Mangalyaan web application is a visualizing tool that helps the Mars rover (Mangalyaan) to find the shortest path between a start point and an end point using artificial intelligence search algorithms.
It is an entity which acts, directing its activity towards achieving goals that is to find optimized path to the destination while avoiding all the obstacles This cost might include cost of wear and tear of the rover and cost of energy wasted. Different algorithms are observed and applied to help the mangalyaan to become intelligent and make smart decisions.

# Getting started 
Follow these steps to get a copy of the project up and run on your local machine
1. Fork this repository, and make clone on local machine.
2. run **npm build** this command will downloads all the dependencies of this project.
3. run **npm start** to run it.

# Demo
https://mangalyaan-1.herokuapp.com/

# Languages used:
HTML5, CSS, JAVASCRIPT

# Framework
React

# Algorithms

## 1.Breath First Search Algorithm
Breadth-first search (BFS) is an algorithm for traversing or searching a tree or a graph.It is an uninformed Search. BFS can be used for many applications. In this case it can be used to find the shortest path form a source node in a graph to a goal node. The BFS algorithm starts from a single source node and subsequently search over all the neighbouring nodes and add it into a queue. After visiting each node, the algorithm will flag that node as visited and will not add that node into the queue if it is visited again in the future. The algorithms visits nodes in the graph according to the queue and will add the all the neighbouring nodes of the currently visited node into the back of the queue. The algorithm stops if the queue is empty or the goal node is the currently visited node.

## 2.Dijkstra's Algorithm
Dijkstra algorithm is a weighted algorithm for finding the shortest paths between nodes in a graph. For a given source node in the graph, the algorithm finds the shortest path between that node and every other node in the graph. It can also be used for finding the shortest paths from a single node to a single destination node by stopping the algorithm once the shortest path to the destination node has been determined. 

## 3.Greedy Best-First Search Algorithm
Greedy best-first search is a weighted algorithm that always selects the path which appears best at that moment. It is the combination of depth-first search and breadth-first search algorithms. It uses the heuristic function and search. Best-first search allows us to take the advantages of both algorithms. With the help of best-first search, at each step, we can choose the most promising node. In the best first search algorithm, we expand the node which is closest to the goal node and the closest cost is estimated by heuristic function, i.e. f(n)= h(n).
Were, h(n)= estimated cost from node n to the goal.

## 4. A* Algorithm
 A* algorithm is a weighted algorithm for finding the shorthest path between nodes in a graph A* is an informed search algorithm. It searches among all possible paths to the solution (all the  possible solutions in the search space) for the one that has the smallest cost based on the heuristic used (in the case of pathfinding, the  heuristic is distance from the goal), and among these paths it first considers the ones that appear to lead most quickly to the solution. It is an improvement over    Dijkstra’s algorithm by using a heuristic to guide it’s search faster towards the goal.   At each iteration of its main loop, A* needs to determine  which of its partial paths to expand into one or more longer  paths. It does so based on an estimate of the cost (total weight)  still to go to the goal node. Formally, A* selects the path that minimizes:
                   f(n)=g(n)+h(n)

 where,
 g(n) is the cost of the path from the start node to n, and 
h(n) is a heuristic that estimates the cost of the cheapest path from n to the goal.

# Additional features
1.User can add weights in case of weighed algorithm , algorithm considers these weights and finds  shortest path that cost the minimum.  
2.A message is displayed on screen if path doesn't exist.

