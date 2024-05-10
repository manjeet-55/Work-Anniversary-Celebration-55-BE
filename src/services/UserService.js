import supabase from "../utils/supabase.js";

const UserServices = () => {
  const getAllUsers = async () => {
    const { data, error } = await supabase.from("Users").select("*");
    if (error) {
      throw new Error("Error fetching users");
    }
    return data;
  };

  const getUserById = async (userId) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();
    if (error) {
      throw new Error("Error fetching user by id");
    }
    return data;
  };

  const createUser = async (userData) => {
    const { data, error } = await supabase
      .from("users")
      .insert(userData)
      .single();
    if (error) {
      throw new Error("Error creating user");
    }
    return data;
  };
  const updateUser = async (userId, userData) => {
    const { data, error } = await supabase
      .from("users")
      .update(userData)
      .eq("id", userId)
      .single();
    if (error) {
      throw new Error("Error updating user");
    }
    return data;
  };

  const deleteUser = async (userId) => {
    const { error } = await supabase.from("users").delete().eq("id", userId);
    if (error) {
      throw new Error("Error deleting user");
    }
  };

  return {
    getAllUsers,
    createUser,
    deleteUser,
    getUserById,
    updateUser
  };
};

export default UserServices;
