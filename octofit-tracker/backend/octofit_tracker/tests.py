from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(name="Test User", email="test@example.com", team="Marvel")
        self.assertEqual(user.name, "Test User")

class TeamModelTest(TestCase):
    def test_create_team(self):
        team = Team.objects.create(name="Marvel", members=["Iron Man"])
        self.assertEqual(team.name, "Marvel")

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        activity = Activity.objects.create(user="Test User", activity="Running", duration=30)
        self.assertEqual(activity.activity, "Running")

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        leaderboard = Leaderboard.objects.create(team="Marvel", points=100)
        self.assertEqual(leaderboard.team, "Marvel")

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(name="Strength", suggested_for=["Iron Man"])
        self.assertEqual(workout.name, "Strength")
